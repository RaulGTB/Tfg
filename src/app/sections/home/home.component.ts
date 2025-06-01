import { DataService } from './../../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private data:DataService){
    this.getDpts()
}

  leagues: any[] = []

  getDpts(){
    this.data.getLeagues().subscribe((res:any)=>{
      this.leagues = res
      console.log(this.leagues)
    });
  }


}
