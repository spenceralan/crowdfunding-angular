import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FirebaseService]
})
export class HomeComponent implements OnInit {
  displayCategory: string = "All"
  projects;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.projects = this.firebaseService.getProjects();
  }

  filterBy(category) {
    this.displayCategory = category;
  }

}
