import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Browser } from '@capacitor/browser';
import { NavController, ToastController } from '@ionic/angular';
import { UserQuery, UserService } from 'src/app/stores/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loginForm: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
        private userService: UserService,
        public userQuery: UserQuery,
        private navCtrl: NavController,
        private toastCtrl: ToastController
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: [
                '',
                Validators.compose([
                    Validators.maxLength(100),
                    Validators.required,
                    Validators.email,
                ]),
            ],
            password: ['', Validators.compose([Validators.required])],
        });
    }

    get f() {
        return this.loginForm.controls;
    }

    async onSubmit() {
        this.loginForm.markAllAsTouched();

        if (this.loginForm.invalid) {
            return;
        }

        await this.userService
            .login(this.f.email.value.trim(), this.f.password.value)
            .then(async (success) => {
                if (success) {
                    this.navCtrl.navigateBack('');
                } else {
                    const error = await this.toastCtrl.create({
                        color: 'danger',
                        position: 'top',
                        message: 'The credentials are incorrect, please try again',
                        duration: 3000,
                    });

                    error.present();
                }
            });
    }

    forgotPassword() {
        Browser.open({ url: "https://acsvillage.com/login/reset?app=true" });
    }
}