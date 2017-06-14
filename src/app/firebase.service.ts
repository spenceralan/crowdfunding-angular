import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  projects: FirebaseListObservable<any[]>;
  payments: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
    this.payments = database.list('payments');
  }

  getProjects(){
    return this.projects;
  }

  getProjectByID(key){
    return this.database.object('projects/' + key);
  }

  saveProject(newProject){
    this.projects.push(newProject);
  }

  editProject(project){
    let dbProject = this.getProjectByID(project.$key);
    dbProject.update({
      category: project.category,
      swag: project.swag,
      title: project.title,
      managers: project.managers,
      description: project.description,
      fundingTarget: project.fundingTarget
    });
  }

  deleteProject(project){
    let dbProject = this.getProjectByID(project.$key);
    dbProject.remove();
  }

  getPayments(){
    return this.payments;
  }

  savePayment(payment) {
    this.payments.push(payment);
  }

}
