import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'home',
  templateUrl: './previous.component.html'
})

export class PreviousButtonComponent {

  textValue = "";

  onSubmit(data: any) {
    this.textValue = data
    localStorage.setItem("data", this.textValue);

  }
  ngOnInit() {

    this.textValue = localStorage.getItem("data")

  }
}