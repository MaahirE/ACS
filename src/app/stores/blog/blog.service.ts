import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BlogStore } from './blog.store';

@Injectable({ providedIn: 'root' })
export class BlogService {
    constructor(private blogStore: BlogStore, private http: HttpService) { }

    async getList() {
        return await this.http
            .request('GET', 'blogList', {
                format: 'json',
            })
            .then((result) => {
                console.log(result);
                if (result[0]?.objectList?.length > 0) {
                    this.blogStore.upsertMany(result[0].objectList);
                    this.blogStore.remove(
                        (entity) =>
                            !result[0].objectList.some(
                                (newEntity) => newEntity.id === entity.id
                            )
                    );
                }
            });
    }

    getBlog(id) {
        this.http
            .request('GET', 'blog/' + id, {
                format: 'json',
            })
            .then((result) => {
                if (result[0]?.objectList?.length > 0) {
                    this.blogStore.upsertMany(result[0].objectList);
                }
            });
    }
}