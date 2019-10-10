import { Component, OnInit } from '@angular/core';
//import {PlaneInfo} from '../plane'
import {PlaneDetails} from '../app.planeInfo'
import {Router} from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 // emp:Array<PlaneInfo>;
  constructor(private ei:PlaneDetails,private router:Router) { 
   //this.ei.checkPlane().subscribe();
   
  }
  
  
  ngOnInit() {
  }
  formBookFlight(){
    
    this.router.navigate(['BookFlight']);
  }
  formReschedule(){
    
    this.router.navigate(['reschedule']);
  }
  formCancel(){
    this.router.navigate(['cancel']);
  }
  logout(){
    this.router.navigate(['login']);
  }
SEAT(){
  this.router.navigate(['seatret'])
}
}

