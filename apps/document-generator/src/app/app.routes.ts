import { Routes } from '@angular/router';
import { HomePageComponent } from './generator/ui/home-page/home-page.component';
import {DocumentQuizComponent} from "./generator/ui/features/document-quiz/document-quiz.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'document/:nom',
    component: DocumentQuizComponent,
  }
];
