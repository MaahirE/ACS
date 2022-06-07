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
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    signupForm: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
        private userService: UserService,
        public userQuery: UserQuery,
        private navCtrl: NavController,
        private toastCtrl: ToastController
    ) { }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            firstName: [
                '',
                Validators.compose([Validators.maxLength(100), Validators.required]),
            ],
            lastName: [
                '',
                Validators.compose([Validators.maxLength(100), Validators.required]),
            ],
            email: [
                '',
                Validators.compose([
                    Validators.maxLength(100),
                    Validators.required,
                    Validators.email,
                ]),
            ],
            password: ['', Validators.compose([Validators.required])],
            password_confirmation: [
                '',
                Validators.compose([Validators.required, this.matchValues('password')]),
            ],
        });
    }

    get f() {
        return this.signupForm.controls;
    }

    async onSubmit() {
        this.signupForm.markAllAsTouched();

        if (this.signupForm.invalid) {
            return;
        }

        await this.userService
            .signup(this.signupForm.getRawValue())
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