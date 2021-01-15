import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export interface addName {
  name: string,
  id?: number
}
@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {
  form: FormGroup
  list: addName[] = []
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),

    })

  }

  submit() {
    this.list.unshift(this.form.value);
    this.form.reset()

  }



}
