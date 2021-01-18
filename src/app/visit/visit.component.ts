import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VisitService } from './visit.service';
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

  constructor(public listService: VisitService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    })
  }
  submit() {
    this.listService.list.unshift(this.form.value);
    this.form.reset()
  }
}
