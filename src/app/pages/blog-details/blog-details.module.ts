import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/module/shared.module';
import { BlogDetailsPageRoutingModule } from './blog-details-routing.module';
import { BlogDetailsPage } from './blog-details.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BlogDetailsPageRoutingModule,
        SharedModule,
    ],
    declarations: [BlogDetailsPage],
})
export class BlogDetailsPageModule { }