import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { PersonServiceService } from '../service/person-service.service';
import { Gender } from '../model/Gender';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  gender=Gender;

  constructor(public service: PersonServiceService) { }

  ngOnInit(): void {
    this.service.get().then(res => console.log(res));
  }

  deletePerson(Id: number | string) {
    if (confirm("Are You Sure"))
      this.service.delete(Id);
  }

  showPerson(person: Person) {
    this.service.person = Object.assign({}, person);
  }


}
