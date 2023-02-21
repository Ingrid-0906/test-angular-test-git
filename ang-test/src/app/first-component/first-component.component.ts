import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  eye_bool: boolean = false;
  eyes: string = 'change here.'; /* VALOR INICIAL. NAO FICA.*/

  togglEye(){
    this.eye_bool = !this.eye_bool;

    if (this.eye_bool) {
      this.eyes = 'CHANGED!';
    } else {
      this.eyes = 'CHANGED AGAIN?';
    }
    
  }


};
