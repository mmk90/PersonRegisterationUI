import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../service/person-service.service';
import { NgModule } from '@angular/core';
import { NgModel, NgForm, Form } from '@angular/forms';
import { Gender } from '../model/Gender';


@Component({
  selector: 'app-person-registor',
  templateUrl: './person-registor.component.html',
  styleUrls: ['./person-registor.component.css']
})
export class PersonRegistorComponent implements OnInit {

  genders: number[] = [];
  enums = Gender


  constructor(public service: PersonServiceService) {
    this.genders = Object.keys(this.enums).filter(x => parseInt(x) >= 0).map(Number);
    console.log(this.genders)
  }

  ngOnInit(): void {
  }

  submitPerson(form: NgForm) {
    if (this.service.person.id == 0 || this.service.person.id == null)
      this.service.post();
    else
      this.service.put();

    this.resetForm(form);
  }

  resetForm(form: NgForm) {
    form.form.reset();
  }
}
