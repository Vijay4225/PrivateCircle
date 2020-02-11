import { Component,OnInit } from '@angular/core';
import { AppService } from './shared/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit{
  title = 'PrivateCircle';
  description : string;
  usersData: any = [];



  constructor(private _appService : AppService) {}

  ngOnInit() {
    this.usersData = this._appService.getPortfolioData();
  }

  displayDescription(index) {
    
   const indx =  index++;
   alert(this.usersData.length);
   for(let i=0;i<this.usersData.length;i++) {
     if(i+1===indx) {
       this.description = this.usersData[i+1].description;
       break;
     }
   }
    
  }

  
}
