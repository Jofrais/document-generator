import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-documents-list',
  standalone: true,
  imports: [CommonModule, AngularFirestoreModule, RouterLink],
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.scss']
})
export class DocumentsListComponent {

  documents: any;
  constructor(private store : AngularFirestore) {
    store.collection('documents').valueChanges().subscribe((data) => {
      this.documents = data;
      console.log(data);
    });
  }
}
