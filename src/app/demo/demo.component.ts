import { Component, OnInit, ViewChildren } from '@angular/core';
import { CollapseComponent } from 'angular-bootstrap-md';

import { element, by } from 'protractor';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

import { HttpClient, HttpEventType } from '@angular/common/http';
 

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  
})
export class DemoComponent implements OnInit {
 
  public isCollapsed = true;

  public isCollapsed1 =true;



  // orders
  // form: FormGroup;
  // orders = [];

  // constructor(private formBuilder: FormBuilder) {
  //   this.form = this.formBuilder.group({
  //     orders: ['']
  //   });

  //   // async orders
  //   of(this.getOrders()).subscribe(orders => {
  //     this.orders = orders;
  //     this.form.controls.orders.patchValue(this.orders[0].id);
  //   });

  //   // synchronous orders
  //   // this.orders = this.getOrders();
  //   // this.form.controls.orders.patchValue(this.orders[0].id);
  // }

  // getOrders() {
  //   return [
  //     { id: '1', name: 'order 1' },
  //     { id: '2', name: 'order 2' },
  //     { id: '3', name: 'order 3' },
  //     { id: '4', name: 'order 4' }
  //   ];
  // }

  // submit() {
  //   console.log(this.form.value);
  // }

  public countries: { [key: string]: Object; }[] = [
    { Name: 'Australia', Code: 'AU' },
        { Name: 'Bermuda', Code: 'BM' },
        { Name: 'Canada', Code: 'CA' },
        { Name: 'Cameroon', Code: 'CM' },
        { Name: 'Denmark', Code: 'DK' },
        { Name: 'France', Code: 'FR' },
        { Name: 'Finland', Code: 'FI' },
        { Name: 'Germany', Code: 'DE' }, 
    ];
    // maps the local data column to fields property
    public localFields: Object = { text: 'Name', value: 'Code' };
    // set the placeholder to MultiSelect Dropdown input element
    public localWaterMark: string = 'Select Category';
  


    public tag: { [key: string]: Object; }[] = [
      { Name: 'Australia', Code: 'AU' },
          { Name: 'Bermuda', Code: 'BM' },
          { Name: 'Canada', Code: 'CA' },
          { Name: 'Cameroon', Code: 'CM' },
          { Name: 'Denmark', Code: 'DK' },
          { Name: 'France', Code: 'FR' },
          { Name: 'Finland', Code: 'FI' },
          { Name: 'Germany', Code: 'DE' }, 
      ];
      // maps the local data column to fields property
      public localtags: Object = { text: 'Name', value: 'Code' };
      // set the placeholder to MultiSelect Dropdown input element
      public localtag: string = 'Select Category';





      public location: { [key: string]: Object; }[] = [
        { Name: 'Australia', Code: 'AU' },
            { Name: 'Bermuda', Code: 'BM' },
            { Name: 'Canada', Code: 'CA' },
            { Name: 'Cameroon', Code: 'CM' },
            { Name: 'Denmark', Code: 'DK' },
            { Name: 'France', Code: 'FR' },
            { Name: 'Finland', Code: 'FI' },
            { Name: 'Germany', Code: 'DE' }, 
        ];
        // maps the local data column to fields property
        public locallocations: Object = { text: 'Name', value: 'Code' };
        // set the placeholder to MultiSelect Dropdown input element
        public locallocation: string = 'Select Category';





       
        



        


      
  
    

  ngOnInit() {
    // it('should check ngHide', function() {
    //   var checkbox = element(by.model('checked'));
    //   var checkElem = element(by.css('.check-element'));
    
    //   expect(checkElem.isDisplayed()).toBe(true);
    //   checkbox.click();
    //   expect(checkElem.isDisplayed()).toBe(false);
    // });
    
  
  }

}
