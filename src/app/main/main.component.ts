import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators'
import { MainService, Post } from './main.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', './errors.components.scss']
})
export class MainComponent implements OnInit {
  show: boolean = true;
  loading = false;
  form: FormGroup

  constructor(private mainService: MainService,
    private cd: ChangeDetectorRef, private sanitizer: DomSanitizer) { }
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      img: new FormControl('', Validators.required),
      title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      text: new FormControl('', [Validators.required, Validators.maxLength(50)]),

    })
  }
  addPost() {
    this.show = false
  }
  submit() {
    this.loading = true;
    const posteForm = {
      ...this.form.value
    }
    this.mainService.submit({
      ...this.form.value
    }).pipe(delay(1500)).subscribe(observer => {
      this.mainService.posts.unshift(posteForm);
      this.show = true;
      this.loading = false
    })
  }
  onFileChange(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.form.patchValue({
          img: event.target.result
        })
      }
    }
  }
}

