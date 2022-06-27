import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { UserQuery, UserService } from 'src/app/stores/user';

@Component({
    selector: 'app-create-group',
    templateUrl: './create-group.page.html',
    styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {
    createGroup: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
        private userService: UserService,
        public userQuery: UserQuery,
        private navCtrl: NavController,
        private toastCtrl: ToastController
    ) { }

    ngOnInit() {
        this.createGroup = this.formBuilder.group({
            groupName: [
                '',
                Validators.compose([Validators.maxLength(100), Validators.required]),
            ],
            description: [
                '',
                Validators.compose([Validators.maxLength(100), Validators.required]),
            ],

        });
    }

    get f() {
        return this.createGroup.controls;
    }

    async onSubmit() {
        this.createGroup.markAllAsTouched();

        if (this.createGroup.invalid) {
            return;
        }

        await this.userService
            .signup(this.createGroup.getRawValue())
            .then(async (success) => {
                const toast = await this.toastCtrl.create({
                    icon: success ? 'checkmark-circle-outline' : 'close-circle-outline',
                    color: success ? 'success' : 'danger',
                    position: 'top',
                    message: success
                        ? 'Registration successful, a link was sent to the provided email address for verification'
                        : 'Something weird happened, please try again',
                    duration: 3000,
                });

                toast.present();

                if (success) {
                    this.navCtrl.navigateBack('');
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