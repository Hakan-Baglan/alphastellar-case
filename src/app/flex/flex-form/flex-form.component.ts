import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flex-form',
  templateUrl: './flex-form.component.html',
  styleUrls: ['./flex-form.component.css']
})
export class FlexFormComponent implements OnInit {
  form!: UntypedFormGroup;

  color$: Observable<string> = new Observable<string>();

  constructor(private fb: FormBuilder, private router: Router, private store: Store<{ color: string }>) {
    this.color$ = store.select('color');
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      fieldOne: new UntypedFormControl('', Validators.required),
      fieldTwo: new UntypedFormControl('', Validators.required),
      feildThree: new UntypedFormControl('', Validators.required),
      feildFour: new UntypedFormControl('', Validators.required),
    });
  }

  send() {
    console.log('form :', this.form.value);
    this.router.navigate(['grid']);
  }

  formReset() {
    this.form.reset();
  }
}
