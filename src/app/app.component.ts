import { Component } from '@angular/core';

import { DeductionsService } from './deductions.service';

@Component({
  selector: 'TH-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DeductionsService]
})
export class AppComponent {
  
}
