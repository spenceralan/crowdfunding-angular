import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [FirebaseService]
})
export class NewProjectComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  createProject(formValues){
    let newProject = new Project(formValues);
    this.firebaseService.saveProject(newProject);
    this.router.navigate([''])
  }



}
