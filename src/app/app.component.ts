import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private toastr:ToastrService){

  }
  title = 'BootcampT1';

  

   submit() {
     console.log("details submitted")
  }
}
