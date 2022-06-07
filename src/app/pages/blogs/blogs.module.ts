import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/module/shared.module';
import { BlogsPageRoutingModule } from './blogs-routing.module';
import { BlogsPage } from './blogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogsPageRoutingModule,
    SharedModule,
  ],
  declarations: [BlogsPage],
})
export class BlogsPageModule { }

