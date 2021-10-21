import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPost } from '../app.component';

@Component({
	selector: 'app-post-form',
	templateUrl: './post-form.component.html',
	styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
	@Output() onAdd = new EventEmitter();
	title: string = '';
	text: string = '';
	post: IPost | any;
	constructor() {}

	ngOnInit(): void {}

	addPost() {
		if (this.title.trim() && this.text.trim()) {
			this.post = {
				Title: this.title,
				Text: this.text,
			};
			this.onAdd.emit(this.post);
		}
	}
}
