import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { ProfileQuery, ProfileService } from 'src/app/stores/profile';

@Component({
    selector: 'app-create-group',
    templateUrl: './create-group.page.html',
    styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {
    createGroup: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
        private profileService: ProfileService,
        public profileQuery: ProfileQuery,
        private navCtrl: NavController,
        private toastCtrl: ToastController
    ) { }

    ngOnInit() {
        this.createGroup = this.formBuilder.group({
            title: [
                '',
                Validators.compose([Validators.maxLength(100), Validators.required]),
            ],
            description: [
                '',
                Validators.compose([Validators.maxLength(1000), Validators.required]),
            ],

        });
    }

    get f() {
        return this.createGroup.controls;
    }



    async onSubmit() {
        console.log("Create Groups");
        this.createGroup.markAllAsTouched();

        if (this.createGroup.invalid) {
            const toast = await this.toastCtrl.create({
                icon: 'close-circle-outline',
                color: 'danger',
                position: 'top',
                message: 'Something weird happened, please try again',
                duration: 3000,
            });

            toast.present();
            return;
        }
        console.log("Reached this part");
        this.profileService
            .createGroup(this.createGroup.getRawValue())
            .then(async (success) => {
                const toast = await this.toastCtrl.create({
                    icon: 'checkmark-circle-outline',
                    color: 'success',
                    position: 'top',
                    message: 'Your group has been created successfully'
                    ,
                    duration: 3000,
                });

                toast.present();

                if (success) {
                    this.navCtrl.navigateBack('groups');
                }
            });
    }

    matchValues(matchTo: string): (AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null =>
            !!control.parent &&
                !!control.parent.value &&
                control.value === control.parent.controls[matchTo].value
                ? null
                : { isMatching: false };
    }
}