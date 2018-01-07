import { Injectable } from '@angular/core';

import { Job } from '../models/job.model';

@Injectable()
export class JobService {

    jobs: Job[];

    constructor() {
        const author = {
            email: '',
            username: '',
            firstName: '',
            lastName: '',
            name: 'linda lopez',
            avatarUrl: 'assets/img/profiles/11.jpg'
        };
        const group = {
            name: 'CMC Global'
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
                content: 'java',
                author: author
            },
            {
                content: 'bootstrap',
                author: author
            },
            {
                content: 'angular',
                author: author
            }
        ];
        this.jobs = [
            {
                title: 'Full stack web developer',
                location: '11 - Duy Tan - Ha Noi',
                tags: tags,
                isApplied: false,
                isFullTime: false,
                group: group,
                date: '20 - 10 - 2017',
                salary: '2000 - 3000',
                likes: 9,
                comments: comments
            },
            {
                title: 'Full stack web developer',
                location: '11 - Duy Tan - Ha Noi',
                tags: tags,
                isApplied: false,
                isFullTime: true,
                group: group,
                date: '20 - 10 - 2017',
                salary: '2000 - 3000',
                likes: 9,
                comments: comments
            },
            {
                title: 'Full stack web developer',
                location: '11 - Duy Tan - Ha Noi',
                tags: tags,
                isApplied: true,
                isFullTime: false,
                group: group,
                date: '20 - 10 - 2017',
                salary: '2000 - 3000',
                likes: 9,
                comments: comments
            },
            {
                title: 'Full stack web developer',
                location: '11 - Duy Tan - Ha Noi',
                tags: tags,
                isApplied: true,
                isFullTime: true,
                group: group,
                date: '20 - 10 - 2017',
                salary: '2000 - 3000',
                likes: 9,
                comments: comments
            },
            {
                title: 'Full stack web developer',
                location: '11 - Duy Tan - Ha Noi',
                tags: tags,
                isApplied: false,
                isFullTime: false,
                group: group,
                date: '20 - 10 - 2017',
                salary: '2000 - 3000',
                likes: 9,
                comments: comments
            }
        ];
    }

    all(): Job[] {
        return this.jobs;
    }

    get(index: number): Job {
        return this.jobs[index];
    }
}
