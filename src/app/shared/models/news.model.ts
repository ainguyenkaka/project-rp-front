import { User } from './user.model';
import { Tag } from './tag.model';
import { Comment } from './comment.model';

export class News {
    title: string;
    imgUrl: string;
    date: string;
    likes: number;
    content: string;
    tags: Tag[];
    comments: Comment[];
    author: User;
}
