import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsrInfo} from './usrinfo';
import {PlaneData} from './planedata'
import {Router} from '@angular/router';
import {Seat} from './seat'
import {Booking} from './booking'
@Injectable()
export class UsrInfoService {
constructor(private http:HttpClient,private router:Router){

}
    
    //Display the output console of browser
    /*checkUser(objRef):string{
        this.http.get("http://localhost:9090/RestDemo/rest/obj",{responseType:'text'}).
        subscribe(data=>console.log(data));
        return null;
    }*/
    //Display the output on browser 
    /*checkUser(objRef):Observable<string>{
        return this.http.get("http://localhost:9090/RestDemo/rest/obj",{responseType:'text'});
    }*/

    //Retrieve one object in the form of json 
  /*  checkUser(objRef):Observable<Emp>{
        return this.http.get<Emp>("http://localhost:9090/RestDemo/rest/obj/empInfo");
    }
*/
//Retrieve the collection of object
/*checkUser(objRef):Observable<Emp[]>{
    return this.http.get<Emp[]>("http://localhost:9090/RestDemo/rest/obj/empsInfo");
}*/
//check user from rest 
 /* checkUser(objRef){
    return this.http.post("http://localhost:8080/AirplaneProject/jaxrs/Usr/VerifyUsrInfo",objRef,{responseType:'text'})
    .subscribe(res=>
        {
            if(res=="Success"){
                    this.router.navigate(['book']);
                    sessionStorage.setItem("loginUser",objRef.emailId);
            }else {
                this.router.navigate(['login']); 
            }
        }
        );
} 
 */
/* {"emailId":objRef.emailId,"password":objRef.password} */
checkUser(objRef){
    if(objRef.tt=="cust"){
     this.http.post("http://localhost:8080/AirplaneProject/jaxrs/Usr/VerifyUsrInfo",{"emailId":objRef.emailId,"password":objRef.password},{responseType:'text'})
    .subscribe(res=>
        {
            if(res=="Success"){
                    this.router.navigate(['book']);
                    sessionStorage.setItem("loginUser",objRef.emailId);
            }else {
                this.router.navigate(['login']);
                alert("Enter Correct Login Credentials"); 
            }
        }
        );
    }else if(objRef.tt=="admin"){
        this.http.post("http://localhost:8080/AirplaneProject/jaxrs/Usr/VerifyUsrInfo",{"emailId":objRef.emailId,"password":objRef.password},{responseType:'text'})
        .subscribe(res=>
            {
                if(res=="Success"){
                        this.router.navigate(['admin']);
                        sessionStorage.setItem("loginUser",objRef.emailId);
                }else {
                    this.router.navigate(['login']);
                    alert("Enter Correct Login Credentials"); 
                }
            }
            );
    }
}
checkUser1(objRef){
    return this.http.post("http://localhost:8080/AirplaneProject/jaxrs/Usr/UsrInsert",objRef,{responseType:'text'})
    .subscribe(res=>
    {
        if(res=="inserted successfully"){
            this.router.navigate(['book']);
            sessionStorage.setItem("loginUser",objRef.emailId);
    }else {
        this.router.navigate(['login']); 
    }
}
);
}
checkUser2(objRef):Observable<PlaneData[]>{
    return this.http.post<PlaneData[]>("http://localhost:8080/AirplaneProject/jaxrs/Plane/Planeret1",objRef);
    
}

checkUser3(email):Observable<UsrInfo>{
    return this.http.post<UsrInfo>("http://localhost:8080/AirplaneProject/jaxrs/Usr/UsrConfirm",{"emailId":email});
    
}
checkBooking(formObj){
    return this.http.post("http://localhost:8080/AirplaneProject/jaxrs/Booking/BookingInsert",formObj,{responseType:'text'})
    .subscribe(res=>{
        console.log(res);
        if(res=="inserted successfully"){
                this.router.navigate(['bill']);
                
        }
    }
    );
}

checkUserRe(formObj3){
    return this.http.post("http://localhost:8080/AirplaneProject/jaxrs/Booking/BookingReschedule",formObj3,{responseType:'text'})
    .subscribe(res=>
        {
            console.log(res);
            if(res=="Success"){
                    this.router.navigate(['reschedule-book']);
                    
            }else {
                this.router.navigate(['login']); 
            }
        }
        );
}

checkUserCancel(formObj4){
    return this.http.post("http://localhost:8080/AirplaneProject/jaxrs/Booking/BookingDelete",formObj4,{responseType:'text'})
    .subscribe(res=>{
        console.log(res);
        if(res=="Success"){
                alert("Cancel confirmed");
                
        }else {
            alert("Could not Cancel Enter Correct ID");
        }
    }
    );
}
checkBooking1(formObj){
    return this.http.post("http://localhost:8080/AirplaneProject/jaxrs/Booking/BookingInsert",formObj,{responseType:'text'})
    .subscribe(res=>{
        console.log(res);
        if(res=="inserted successfully"){
            alert("Booking confirmed");
            
    }else {
        alert("Could not Cancel Enter Correct ID");
    }
    }
    );
    

}
checkBooking2(bookid){
    return this.http.post("http://localhost:8080/AirplaneProject/jaxrs/Booking/BookingDelete",{"bookId":bookid},{responseType:'text'})
    .subscribe(res=>console.log(res));
}

Planeretrieve():Observable<PlaneData[]>{
    return this.http.get<PlaneData[]>("http://localhost:8080/AirplaneProject/jaxrs/Plane/Planeret");
    
}
Userretrieve():Observable<UsrInfo[]>{
    return this.http.get<UsrInfo[]>("http://localhost:8080/AirplaneProject/jaxrs/Usr/Usrret");
    
}
bookingretrieve():Observable<Booking[]>{
    return this.http.get<Booking[]>("http://localhost:8080/AirplaneProject/jaxrs/Booking/BookingRet");
    
}
Seatretrieve():Observable<Seat[]>{
    return this.http.get<Seat[]>("http://localhost:8080/AirplaneProject/jaxrs/Seat/Seatret");
    
}

}

