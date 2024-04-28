import { Component, OnInit } from '@angular/core';
import { ShowappApiService } from '../services/showapp-api.service';

@Component({
  selector: 'app-show-recipies',
  templateUrl: './show-recipies.component.html',
  styleUrls: ['./show-recipies.component.css']
})
export class ShowRecipiesComponent implements OnInit {
  allrecipies:any[]=[];


  constructor(private api:ShowappApiService){}

  ngOnInit(): void {
    this.viewRecipiesList()
  }
  
  viewRecipiesList(){
    this.api.getRecipiesAPI().subscribe({
      next:(res:any)=>{

        console.log(res.recipes);
        this.allrecipies=res.recipes;
        
        },
        error:(err:any)=>{
          console.log(err.message);
  
        }
    })
  }

  

}
