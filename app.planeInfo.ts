import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {PlaneData} from './planedata'
@Injectable()
export class PlaneDetails{
  constructor(private http:HttpClient){}

    checkPlane(plRef):Observable<PlaneData[]>{
        return this.http.post<PlaneData[]>("http://localhost:8080/AirplaneProject/jaxrs/Plane/Planeret1",plRef);
        
    }
    checkUserSearch(i):Observable<PlaneData>{
        return this.http.post<PlaneData>("http://localhost:8080/AirplaneProject/jaxrs/Plane/Planeret1",{});
    }
}
