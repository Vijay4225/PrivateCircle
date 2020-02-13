import { Component,OnInit } from '@angular/core';
import { AppService } from '../shared/portfolio.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls : ['./dashboard.component.css'],
  providers: [AppService]
})
export class DashboardComponent implements OnInit{
  title = 'PrivateCircle';
  description : string;
  usersData: any = [];



  constructor(private _appService : AppService) {}

  ngOnInit() {
    this.usersData = this._appService.getPortfolioData();
  }

  displayDescription(id) {    
  // const indx =  index++;
   this.usersData = this._appService.getPortfolioData();
   for(let i=0;i<this.usersData.length;i++) {
     if(this.usersData[i].id===id) {
       this.description = this.usersData[i].description;
       break;
     }
   }    
  }

  
}
