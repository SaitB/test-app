import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

export interface IPost {
	Id?: number;
	Title: string;
	Text: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'test-app';
	isTest = false;
	valueText = this.isTest ? 2 : 3;

	posts: IPost[] = [
		{
			Id: 1,
			Title: '123',
			Text: 'Проверка поста angular',
		},
		{
			Id: 2,
			Title: '123',
			Text: 'Проверка поста angular',
		},
	];

	constructor() {}

	ngOnInit(): void {}

	onAdd($event: IPost) {
		this.posts.push($event);
	}
}
