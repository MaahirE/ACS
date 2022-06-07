import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Blog } from './blog.model';

export interface BlogState extends EntityState<Blog> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'blog'
})
export class BlogStore extends EntityStore<BlogState> {

    constructor() {
        super();
    }

}