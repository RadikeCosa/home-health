import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css'],
})
export class ReportFormComponent {
  reportForm = this.fb.group({
    patient: ['', Validators.required],
    date: ['', Validators.required],
    vitalSigns: this.fb.group({
      hr: ['80', [Validators.min(10), Validators.max(200)]],
      rr: ['12', [Validators.min(1), Validators.max(40)]],
      bp: this.fb.group({
        sistolic: ['130', [Validators.min(60), Validators.max(250)]],
        diastolic: ['70', [Validators.min(10), Validators.max(120)]],
      }),
      o2: ['100', [Validators.min(60), Validators.max(100)]],
    }),
    report: ['', Validators.required],
    prescriptions: this.fb.array([this.fb.control('')]),
  });

  get prescriptions() {
    return this.reportForm.get('prescriptions') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  addPrescription() {
    this.prescriptions.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.reportForm.value);
    console.log(this.reportForm.valid);
    console.log(this.reportForm.touched);
  }
}
