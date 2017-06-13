import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  projects: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects(){
    return this.projects;
  }

  saveProject(newProject){
    this.projects.push(newProject);
  }

}
