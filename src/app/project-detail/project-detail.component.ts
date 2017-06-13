import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Project } from '../project.model';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [FirebaseService]
})
export class ProjectDetailComponent implements OnInit {
  projectID: string;
  project;
  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.projectID = this.route.params['_value']['id'];
    this.firebaseService.getProjectByID(this.projectID).subscribe(data => { this.project = data });
  }

}
