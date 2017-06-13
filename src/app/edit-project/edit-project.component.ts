import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Project } from '../project.model';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [FirebaseService]
})
export class EditProjectComponent implements OnInit {
  projectID: string;
  project;
  categories: string[] = ["Charitable", "Product/Business Idea", "Creative Project"]
  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.projectID = this.route.params['_value']['id'];
    this.firebaseService.getProjectByID(this.projectID).subscribe(data => { this.project = data });
  }

  editProject(project){
    this.firebaseService.editProject(project);
    this.router.navigate(['project', this.projectID])
  }

  deleteProject(project){
    this.firebaseService.deleteProject(project);
    this.router.navigate(['']);
  }

}
