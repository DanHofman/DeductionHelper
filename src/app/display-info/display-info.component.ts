import { Component, OnInit, HostListener } from '@angular/core';

import { Deduction } from '../deduction';
import { DeductionsService } from '../deductions.service';

@Component({
  selector: 'th-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent {
  private types: string[];
  private deduction;
  private typeSelected: boolean = true;
  private monthSelected: boolean = true;
  private selectedMonth: string = "all";
  private selectedType: string = "all";
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
  constructor(private deductions: DeductionsService) {
    this.types = this.deductions.getTypes();
    this.types.push("all");
  }

  @HostListener('mouseup') selected() {
      this.deduction = this.deductions.getDeductionsByMonth(this.selectedMonth, this.selectedType);
  }
  
  selectMonth(month: string){
    console.log(month);
    this.selectedMonth = month;
    
    if(this.selectedMonth != null) {
      this.monthSelected = true;
    }
    this.selected();
  }

  selectType(type: string){
    console.log(type);
    this.selectedType = type;
    if(this.selectedType != null){
      this.typeSelected = true;
      console.log(this.typeSelected);
    }
    this.selected();
  }
}
