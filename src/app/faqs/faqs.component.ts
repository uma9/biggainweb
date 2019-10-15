import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray,Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  arrayInputs = [{controlerInputName1: ''}];

  formName =this.fb.group({
    controllerArray: this.fb.array([])
  })  

  constructor(private fb: FormBuilder) { }

  setArrayInputs(arrayInputs) {
    const arrayFG = arrayInputs.map(address => this.fb.group(address));
    const formArray = this.fb.array(arrayFG);
    this.formName.setControl('controllerArray', formArray);
  }

  ngOnInit() { this.setArrayInputs(this.arrayInputs) }

  addInput() {(this.formName.get('controllerArray') as FormArray).push(this.fb.group({controlerInputName1:''})) }

  removeInput(index) { this.formName.controls.controllerArray["controls"].splice(index,1) }

 

 

}
