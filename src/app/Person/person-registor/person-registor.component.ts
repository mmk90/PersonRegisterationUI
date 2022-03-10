import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../service/person-service.service';
import { NgModule } from '@angular/core';
import { NgModel, NgForm, Form } from '@angular/forms';


@Component({
  selector: 'app-person-registor',
  templateUrl: './person-registor.component.html',
  styleUrls: ['./person-registor.component.css']
})
export class PersonRegistorComponent implements OnInit {

  constructor(public service: PersonServiceService) { }

  ngOnInit(): void {
  }

  submitPerson(form: NgForm) {
    if (this.service.person.id == 0)
      this.service.post();
    else
      this.service.put();
      
    this.resetForm(form);
  }

  resetForm(form: NgForm) {
    form.form.reset();
  }
}
