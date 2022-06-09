import { ID } from '@datorama/akita';

export interface Blog {
    id: ID;
    subject: string;
    publishedByImageUrl: string;
    publishText: string;
    publishedBy: string;
    uniqueId: string;
    publishDate: number;
    title: string;
    subjectLink: string;
}

export function createBlog(params: Partial<Blog>) {
    return {} as Blog;
}