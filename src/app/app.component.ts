import { Component, OnInit } from '@angular/core';
import { ConectionService } from './conection.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conection';

  constructor(private con:ConectionService){

  }

  ngOnInit(){
    this.con.getData().subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
