import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: UntypedFormGroup;
  color$: Observable<string> = new Observable<string>();
  constructor(private fb: FormBuilder,private router: Router,private store: Store<{ color: string }>) {
    this.color$ = this.store.select('color')
   }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      fieldOne: new UntypedFormControl('',Validators.required),
      fieldTwo: new UntypedFormControl('',Validators.required),
      feildThree: new UntypedFormControl('',Validators.required),
      feildFour: new UntypedFormControl('',Validators.required),
    });
  }

  send() {
    console.log('Grid form :',this.form.value);
    this.router.navigate(['flex']);
  }

  formReset() {
    this.form.reset();
  }
}
