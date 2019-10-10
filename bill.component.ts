import { Component, OnInit } from '@angular/core';
import {PlaneData} from '../planedata';
import {UsrInfo} from '../usrinfo';
import {UsrInfoService} from '../app.userinfo'
import {PlaneDetails} from '../app.planeInfo';
import {Router} from '@angular/router'
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
price;
seatNo;
fare:number;
bookid;
  constructor(private pd1:PlaneDetails,private ud1:
    UsrInfoService,private router:Router) {
      this.price= sessionStorage.getItem("price");
      this.seatNo= sessionStorage.getItem("seatNo");
      this.bookid= sessionStorage.getItem("bookid");
      this.fare=parseInt(this.price)*parseInt(this.seatNo);
   
     }
     payment(){
       this.router.navigate(['payment'])
     }

  ngOnInit() {
  }

}
