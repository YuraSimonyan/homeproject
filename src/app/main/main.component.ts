import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators'
import { HttpService, Post } from './main.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', './errors.components.scss']
})
export class MainComponent implements OnInit {

  /////
  show: boolean = true;
  loading = false;
  ////
  form: FormGroup
  posts = [
    {
      img: "../../assets/images/telaviv.jpg",
      title: 'Tel Aviv',
      text: "Tel Aviv-Yafo often referred to as just Tel Aviv, is the most populous city in the Gush Dan metropolitan area of Israel. Located on the Israeli Mediterranean "
    },
    {
      img: "../../assets/images/tallin.jpg",
      title: 'Tallin',
      text: "Tallinn is the capital, the most populous and primate city of Estonia. Located in the northern part of the country, on the shore of the Gulf of Finland of the Baltic"
    }
  ]

  constructor(private httpservice: HttpService,
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
    // this.http.get<Post[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').
    //   subscribe(observer => {
    //     ///іспользовать потом для вивода доугой інфи
    //   })
    ////initialization of validation


  }
  addPost() {
    this.show = false
  }

  submit() {
    this.loading = true;
    const posteForm = {
      ...this.form.value
    }
    this.httpservice.submit({
      ...this.form.value
    }).pipe(delay(1500)).subscribe(observer => {
      this.posts.unshift(posteForm);
      this.show = true;
      this.loading = false
    })


  }
  onFileChange(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.form.patchValue({

          img: event.target.result
        })
      }
    }
  }




}

