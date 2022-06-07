import { Injectable } from '@angular/core';
import { Order, QueryEntity } from '@datorama/akita';
import { BlogStore, BlogState } from './blog.store';

@Injectable({ providedIn: 'root' })
export class BlogQuery extends QueryEntity<BlogState> {

    allBlogs = this.selectAll({
        sortBy: 'publishDate',
        sortByOrder: Order.DESC
    })

    constructor(protected store: BlogStore) {
        super(store);
    }

}