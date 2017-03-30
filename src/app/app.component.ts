import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  users=[
    {id:1,name:'Siva',accno:'01215455485'},
    {id:2,name:'Perumal',accno:'1202212515'},
    {id:3,name:'Balaji',accno:'0021521555'},
    {id:4,name:'Ramesh',accno:'0864165498'},
    {id:5,name:'Arun',accno:'0321321652'}
  ];
}
