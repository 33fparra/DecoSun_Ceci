import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }
  // @ViewChild('passwordInput') passwordInput!: ElementRef;
  // isPasswordVisible: boolean = false;

  // togglePswVisibility(): void {
  //   const inputElement = this.passwordInput.nativeElement as HTMLInputElement;
  //   this.isPasswordVisible = !this.isPasswordVisible;
  //   inputElement.type = this.isPasswordVisible ? 'text' : 'password';
  // }


}
