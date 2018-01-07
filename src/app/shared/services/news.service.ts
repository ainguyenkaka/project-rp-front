import { Injectable } from '@angular/core';

import { News } from '../models/news.model';

@Injectable()
export class NewsService {

    newsList: News[];

    constructor () {
        const author = {
            email: '',
            username: '',
            firstName: '',
            lastName: '',
            name: 'linda lopez',
            avatarUrl: 'assets/img/profiles/11.jpg'
        };

        const comments = [
            {
                content: 'This is really cool. I also want to be a professional designer. Become like me, guys !',
                author: author
            },
            {
                content: 'This is really cool. I also want to be a professional designer. Become like me, guys !',
                author: author
            }
        ];
        const tags = [
            {
                content: 'design',
                author: author
            },
            {
                content: 'professional',
                author: author
            },
            {
                content: 'material',
                author: author
            }
        ];

        this.newsList = [
            {
                title: 'Tips to become the professional designer',
                imgUrl: 'assets/img/news/default-news.jpg',
                date: '20-10-2017',
                likes: 9,
                content: '',
                tags: tags,
                comments: comments,
                author: author
            },
            {
                title: 'Tips to become the professional designer',
                imgUrl: 'assets/img/news/default-news.jpg',
                date: '20-10-2017',
                likes: 9,
                content: '',
                tags: tags,
                comments: comments,
                author: author
            },
            {
                title: 'Tips to become the professional designer',
                imgUrl: 'assets/img/news/default-news.jpg',
                date: '20-10-2017',
                likes: 9,
                content: '',
                tags: tags,
                comments: comments,
                author: author
            },
            {
                title: 'Tips to become the professional designer',
                imgUrl: 'assets/img/news/default-news.jpg',
                date: '20-10-2017',
                likes: 9,
                content: '',
                tags: tags,
                comments: comments,
                author: author
            },
            {
                title: 'Tips to become the professional designer',
                imgUrl: 'assets/img/news/default-news.jpg',
                date: '20-10-2017',
                likes: 9,
                content: '',
                tags: tags,
                comments: comments,
                author: author
            }
        ];
    }

    all(): News[] {
        return this.newsList;
    }

    get(index: number): News {
        return this.newsList[index];
    }
}
