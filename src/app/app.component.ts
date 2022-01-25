import { Component } from '@angular/core';
import { DataService } from 'src/shared/services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apitask';
  constructor(private dataService: DataService){}

  ngOnInit(){
    this.getAllData();
  }

  getAllData(){
    this.dataService.getBreweries().subscribe((res:any) =>{
      console.log(res)
    })
  }
}
