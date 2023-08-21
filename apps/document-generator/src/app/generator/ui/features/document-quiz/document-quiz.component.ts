import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "../../../../shared/navbar/navbar.component";

@Component({
  selector: 'app-document-quiz',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './document-quiz.component.html',
  styleUrls: ['./document-quiz.component.scss']
})
export class DocumentQuizComponent {

}
