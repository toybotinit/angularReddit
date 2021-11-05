import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass ='row';
  /*votes: number;
  title: string;
  link: string;*/
  @Input() article: Article;

  constructor() { 
    /*this.title = 'Angular 2';
    this. link = 'http://angular.io';
    this.votes = 10;*/
    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10
    );
  }

  voteUp(): boolean{
    //this.article.votes +=1;
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean{
    //this.article.votes -=1;
    this.article.voteDown();
    return false;
  }
  ngOnInit(): void {
  }

}
