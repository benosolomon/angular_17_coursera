import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [JsonPipe,CommonModule,ReactiveFormsModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent implements OnInit {
constructor(private builder: FormBuilder) {}

sampleForm = this.builder.group({
  firstName: ['',Validators.required],
  lastName: ['',Validators.minLength(3)],
  adddress: this.builder.group({
    street: [''],
    city: [''],
    zip:[''],
  }),
  aliases: this.builder.array([this.builder.control('')])
})

formSubmitted = false;
ngOnInit(): void {
  }

  get aliases(): FormArray {
    return this.sampleForm.get('aliases') as FormArray;
  }
 addAliases() {
  this.aliases.push(this.builder.control(''));
 }
  onSubmit() {
    this.formSubmitted = true;
    console.log(this.sampleForm.value);
  }
}
