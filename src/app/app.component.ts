import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Driven And Reactive Forms';

  // ---- Template Driven Form ----
  SubmitTemplateForm(tdForm: any) {
    let firstname = tdForm.controls.firstname.value;
    let email = tdForm.controls.email.value;
    console.log(tdForm);
  }

  // ---- END Template Driven Form ----

  // ---- Reactive Form ----
  reactiveForm: FormGroup;
  FirstName: string = "";
  Email: string = "";

  constructor(private fbuilder: FormBuilder) {
    this.reactiveForm = fbuilder.group({
      fname: [''],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get inputRequired() { return this.reactiveForm.controls; }

  PostData(reactiveForm: any) {
    this.FirstName = reactiveForm.controls.fname.value;
    this.Email = reactiveForm.controls.email.value;
    console.log(reactiveForm.controls);
  }

  // ---- END Reactive Form ----

}
