import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'PracticeApp6';
  firstName:string;
  lastName:string;
  status:boolean;
  items: object[];
  username:string;
  password:string;
  posts: object;

  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.firstName = "Jane";
    this.lastName = "Doe";
    this.status = false;
    this.items = [
      {name: "Krishan"},
      {name: "Paras"},
      {name: "Pranjal"},
      {name: "Kritika"},
      {name: "Guddu"},
    ]
    this.username = "";
    this.password = "";
    this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe(res => {
      this.posts = res; 
    })
  }

  displayFirstName() {
    return this.firstName;
  }

  greetUser() {
    window.alert(`Hola ${this.firstName}, How you doing ?`);
  }

  activateUserStatus() {
    this.status = true;
  }

  getOffMe() {
    window.alert('get off me');
  }

  dontWrite() {
    window.alert("dont write anything here !!");
  }
  
  submitLogin(form: NgForm) {
    console.log(form);
    console.log(form.value);

    if (form.value.username !== "" && form.value.password === "romeo") {
      window.alert("Holla Amigos") 
    }

    this.http.post("http://jsonplaceholder.typicode.com/posts", {
      userId:Math.random(),
      id:Math.random(),
      title:"lorem ipsum blorem pipsum",
      body:"lorem's dad went shopping with his girlfriend and got caught by his wife and then happened dhulayi and dhulayi."
    }).subscribe(res => { console.log(res); }, error => { console.log(error); })

    // window.alert(`Hola ${form.username}, How you doing ?`);
  }
}
 