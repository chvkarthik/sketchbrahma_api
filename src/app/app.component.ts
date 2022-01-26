import { Component } from '@angular/core';
import { DataService } from 'src/shared/services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apitask';
  data = "";
  fullList:any;
  searchList:any;
  search="By Category";
  searchType="By type";
  categoryList:any;
  constructor(private dataService: DataService){}

  ngOnInit(){
    this.getAllData();
  }

  //To display all the data
  //Excluded some key-value pairs in all objects for better display
  getAllData(){
    this.dataService.getBreweries(this.data).subscribe((res:any) =>{
      this.fullList = res;
      this.searchList = res;
    })
  }

  //Search By Name 
  searchByName(data:any){
    let value = data.target.value;
    console.log(value)
    this.dataService.searchBreweries(value).subscribe((res:any) =>{
      this.searchList = res.filter((element:any)=>element.name.toLowerCase().includes(value))
    })
  }

  //Get element by Id.
  getItem(item:any){
    console.log(item)
    this.dataService.getBrewery(item).subscribe((res:any) =>{
      this.searchList = [res];
    })
  }


  // Search by category and name.
  // I tried to call this using the examples given. But the api is giving entire data.
  searchByTerm(ev:any){
    let value = ev.target.value;
    if(value.includes(" ")){
      value = value.replace(" ","_");
      console.log(value);
    }
    let searchValue:any;
    if(this.search != "By Category"){
     searchValue = "by_"+this.search.toLowerCase()+"="+value;
    }else{
      document.getElementById("exampleModalCenter")!.classList.add('show');
      document.getElementById("exampleModalCenter")!.style.display = "block";
    }
    if(searchValue){
      console.log(searchValue)
      this.dataService.getBrewery(searchValue).subscribe((res:any)=>{
        console.log(res);
      })
    }
  }

  //To Hide Modal
  hideModal(){
    document.getElementById("exampleModalCenter")!.classList.remove('show');
    document.getElementById("exampleModalCenter")!.style.display = "";
  }

  //When a category is selected.
  selectCategory(ev:any){
    this.search = ev!.target.textContent;
  }

  //sorting all the columns in ascending order
  ascending(data:any){
    if(data == 'id'){
      this.searchList.sort((a:any,b:any)=>(a.id > b.id)?1:-1)
    }
    if(data == 'name'){
      this.searchList.sort((a:any,b:any)=>(a.name.toLowerCase() > b.name.toLowerCase())?1:-1)
    }
    if(data == 'brewery_type'){
      this.searchList.sort((a:any,b:any)=>(a.brewery_type.toLowerCase() > b.brewery_type.toLowerCase())?1:-1)
    }
    if(data == 'city'){
      this.searchList.sort((a:any,b:any)=>(a.city.toLowerCase() > b.city.toLowerCase())?1:-1)
    }
    if(data == 'state'){
      this.searchList.sort((a:any,b:any)=>(a.state > b.state)?1:-1)
    }
    if(data == 'postal_code'){
      this.searchList.sort((a:any,b:any)=>(a.postal_code > b.postal_code)?1:-1)
    }
    if(data == 'phone'){
      this.searchList.sort((a:any,b:any)=>(a.phone > b.phone)?1:-1)
    }    
  }

  //sorting all the columns in descending order
  descending(data:any){
    if(data == 'id'){
      this.searchList.sort((a:any,b:any)=>(a.id > b.id)?-1:1)
    }
    if(data == 'name'){
      this.searchList.sort((a:any,b:any)=>(a.name.toLowerCase() > b.name.toLowerCase())?-1:1)
    }
    if(data == 'brewery_type'){
      this.searchList.sort((a:any,b:any)=>(a.brewery_type.toLowerCase() > b.brewery_type.toLowerCase())?-1:1)
    }
    if(data == 'city'){
      this.searchList.sort((a:any,b:any)=>(a.city.toLowerCase() > b.city.toLowerCase())?-1:1)
    }
    if(data == 'state'){
      this.searchList.sort((a:any,b:any)=>(a.state > b.state)?-1:1)
    }
    if(data == 'postal_code'){
      this.searchList.sort((a:any,b:any)=>(a.postal_code > b.postal_code)?-1:1)
    }
    if(data == 'phone'){
      this.searchList.sort((a:any,b:any)=>(a.phone > b.phone)?-1:1)
    }
  }

  //clear the filters
  listing(){
    this.searchList = this.fullList;
    document.getElementsByTagName('input')[0].value = "";
    document.getElementsByTagName('input')[1].value = "";
  }
}
