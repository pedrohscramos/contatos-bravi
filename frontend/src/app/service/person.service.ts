import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../Store/Model/Person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseurl = "http://localhost/api";

  constructor(private http: HttpClient) { }

  GetAll(){
    return this.http.get<Person[]>(this.baseurl + "/person");
  }
  

  Getbycode(code: number) {
    return this.http.get<Person>(this.baseurl + '/person/' + code);
  }
  Delete(code: number) {
    return this.http.delete(this.baseurl + '/person/' + code);
  }
  Update(data: Person) {
    return this.http.put(this.baseurl + '/person/' + data.id, data);
  }
  Create(data: Person) {
    return this.http.post(this.baseurl + '/person/', data);
  }
}
