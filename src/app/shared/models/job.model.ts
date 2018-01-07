import { User } from './user.model';
import { Tag } from './tag.model';
import { Group } from './group.model';
import { Comment } from './comment.model';

export class Job {
    title: string;
    location: string;
    tags: Tag[];
    isApplied: boolean;
    isFullTime: boolean;
    group: Group;
    date: string;
    salary: string;
    likes: number;
    comments: Comment[];
}
