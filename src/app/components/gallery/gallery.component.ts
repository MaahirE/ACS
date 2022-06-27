import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import { PhotoService } from 'src/app/stores/photo';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
    @Input() profile: any;
    photos: GalleryItem[];

    constructor(private photoService: PhotoService) { }

    ngOnInit() {
        console.log(this.profile)
        this.getPhotoList(this.profile?.uniqueId);
    }

    getPhotoList(profile) {
        this.photoService.getPhotoList({ profile, items: '200' }).then(images => {
            const group = [];
            images.forEach(item => {
                group.push(new ImageItem({ src: item.mediumImageUrl, thumb: item.mediumImageUrl }));
            });

            this.photos = group;
        });
    }

}