import { Deduction } from './deduction';

export class DeductionsService {
  private deductions: [Deduction[],
                    Deduction[],
                    Deduction[],
                    Deduction[],
                    Deduction[],
                    Deduction[],
                    Deduction[],
                    Deduction[],
                    Deduction[],
                    Deduction[],
                    Deduction[],
                    Deduction[]] = [[],[],[],[],[],[],[],[],[],[],[],[]];

  private months: Object = {"January": 0,
                           "February": 1,
                            "March": 2,
                            "April": 3, 
                            "May": 4, 
                            "June": 5, 
                            "July": 6, 
                            "August": 7, 
                            "September": 8, 
                            "October": 9, 
                            "November": 10,
                            "December": 11};

  private types: string[] = [];
  
  typeFilter(month: string, type: string){
    console.log("type filter first line");
    console.log("filtering for: " + month + "\nType: " + type);
    var deductions: Deduction[] = [];
    if(month == "all" && type == "all"){
      for(var i = 0; i < this.deductions.length; i++){
        for(var d in this.deductions[i]){
          deductions.push(this.deductions[i][d]);
        }
      }
    } else if(month == "all" && type != null){
        for(var i = 0; i < this.deductions.length; i++){
          for(var d in this.deductions[i]){
            if(this.deductions[i][d].type == type){
              deductions.push(this.deductions[i][d]);
          }
        }
      }  
    } else if(type == "all" && month != "null"){
        var monthI = this.translateMonth(month);
        var activeMonth =  this.deductions[monthI];
        for(var d in activeMonth){
          deductions.push(activeMonth[d]);
        }
    } else {
      var monthI = this.translateMonth(month);
      console.log("month index: " + monthI);
      console.log("check to see if deduction was passed " + this.deductions[0][0]);
      console.log("else statement: this is the deduction selected by month" + this.deductions[monthI]);
      var activeMonth =  this.deductions[monthI];
      for(var d in activeMonth){
        console.log("active looping object's type is: " + activeMonth[d].type);
        if(activeMonth[d].type == type){
          console.log("what are we looping through? " + d);
          console.log("this will now get pushed: " + activeMonth[d]);
          deductions.push(activeMonth[d]);
        }
      }
    }
    return deductions;
  }

  translateMonth(month: string){
    return this.months[month];
  }
  
  addType(newType: string){
    this.types.push(newType);
  }

  getTypes() {
    return this.types;
  }

  addDeduction(deduction: Deduction, month: string){
    console.log(deduction);
    var monthl = this.translateMonth(month);
    this.deductions[monthl].push(deduction);
    console.log(this.deductions[monthl]);
  }

  getDeductionsByMonth(month: string, type: string){
    var deductions = this.typeFilter(month, type);
    return deductions;
  }

}
