import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SettingsComponent } from 'src/app/components/account/settings/settings.component';
// import { ProfileComponent } from 'src/app/components/account/profile/profile.component';
// import { InvitesComponent } from 'src/app/components/account/invites/invites.component';
// import { ActivityComponent } from 'src/app/components/account/activity/activity.component';
import { PhotoGalleryComponent } from 'src/app/components/gallery/gallery.component';

import { GalleryModule } from '@ngx-gallery/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
// import { MapComponent } from 'src/app/components/map/map.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { GroupEventComponent } from 'src/app/components/group-events/group-events.component';
import { MemberListComponent } from 'src/app/components/member-list/member-list.component';
import { StatusListComponent } from 'src/app/components/status-list/status-list.component';
import { BooleanizePipe } from 'src/app/utils/booleanize.pipe';
// import { SwiperModule } from 'swiper/angular';
// import { LightboxModule } from 'ngx-lightbox';
// import { CommonModule } from '@angular/common';
// import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LightboxModule } from 'ngx-lightbox';
// import { AccordionComponent } from 'src/app/components/accordion/accordion.component';
// import { SettingsComponent } from 'src/app/components/account/settings/settings.component';
import { BlogItemComponent } from 'src/app/components/blog-item/blog-item.component';
// import { DiscoverGridComponent } from 'src/app/components/discover-grid/discover-grid.component';
// import { ProfileDetailsHeaderComponent } from 'src/app/components/profile-details-header/profile-details-header.component';
import { SwiperModule } from 'swiper/angular';
// import { ActivityItemComponent } from 'src/app/components/activity-item/activity-item.component';



@NgModule({
    declarations: [
        // SettingsComponent,
        // ProfileComponent, 
        // InvitesComponent, 
        // ActivityComponent,
        PhotoGalleryComponent,
        // MapComponent,
        GroupEventComponent,
        MemberListComponent,
        StatusListComponent,
        BooleanizePipe,
        BlogItemComponent,
        // DiscoverGridComponent,
        // ProfileDetailsHeaderComponent,
        // AccordionComponent,
        // SettingsComponent,
        // ActivityItemComponent
    ],
    imports: [
        CommonModule,
        GalleryModule,
        LeafletModule,
        SwiperModule,
        LightboxModule,
        LeafletMarkerClusterModule,
        ReactiveFormsModule,
        CommonModule,
        IonicModule,
        SwiperModule,
        LightboxModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    exports: [
        // SettingsComponent,
        // ProfileComponent, 
        // InvitesComponent, 
        // ActivityComponent,
        PhotoGalleryComponent,
        // CalendarModule,
        // MapComponent,
        GroupEventComponent,
        MemberListComponent,
        StatusListComponent,
        BooleanizePipe,
        BlogItemComponent,
        // DiscoverGridComponent,
        // ProfileDetailsHeaderComponent,
        SwiperModule,
        // AccordionComponent,
        // SettingsComponent,
        // ActivityItemComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }