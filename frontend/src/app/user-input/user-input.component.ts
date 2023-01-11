import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @ViewChild('f') form:NgForm
  onSubmit(){
    console.log(this.form.value.userid)
  }
}
