import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {
  @Input() url = 0;

  constructor() {
    setTimeout(() => {
      console.log(this.url);
    }, 500);
  }
  // declarar variables
  // declarar funciones
  verURL() {
    alert(this.url);
  }

  ngOnInit() {
  }

}
