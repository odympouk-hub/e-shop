import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  imports: [CommonModule],
  standalone:true, 
  templateUrl: './test-component.html',
  styleUrl: './test-component.css',
})
export class TestComponent {
isWelcoming:boolean=true;

}
