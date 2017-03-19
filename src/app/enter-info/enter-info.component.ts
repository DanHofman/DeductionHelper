import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Deduction } from '../deduction';
import { DeductionsService } from '../deductions.service';

@Component({
  selector: 'th-enter-info',
  templateUrl: './enter-info.component.html',
  styleUrls: ['./enter-info.component.css']
})
export class EnterInfoComponent  {
  @Output() reloadData = new EventEmitter()
  private value: number;
  private text: string;
  private typetext: string;
  private selectedMonth: string;
  private selectedType: string;
  private typeSelected: boolean = false;
  private monthSelected: boolean = false;
  private months: string[] = ["January",
                           "February",
                            "March",
                            "April", 
                            "May", 
                            "June", 
                            "July", 
                            "August", 
                            "September", 
                            "October", 
                            "November",
                            "December", 
                            "all"]
  private types: string[];

  constructor(private deductions: DeductionsService) {
    this.types = this.deductions.getTypes();
   }

  selectMonth(month: string){
    this.selectedMonth = month;
    console.log(month);
  
    if(this.selectedMonth != null) {
      this.monthSelected = true;
    }
  }

  selectType(type: string){
    this.selectedType = type;
    if(this.selectedType != null){
      this.typeSelected = true;
    }
  }

  submitType(){
    this.deductions.addType(this.typetext);
  }

  submitDeduction() {
    if((this.text) && (this.value) && (this.selectedMonth) && (this.selectedType)){
      var deduction = new Deduction(this.selectedType, this.text, this.value);
      console.log("description: " + this.text + "\nAmount: " + this.value + "\nType: " + this.selectedType)
      this.deductions.addDeduction(deduction, this.selectedMonth);
      this.reloadData.emit(null);
    }
    else {
      alert("Please complete all values");
    }
  }
}