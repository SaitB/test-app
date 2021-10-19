import { Component, OnInit } from '@angular/core';

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
  title = 'test-app';
  constructor() {}

  ngOnInit(): void {}
}
