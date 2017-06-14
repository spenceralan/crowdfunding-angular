import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Project } from '../project.model';
import { Payment } from '../payment.model';
import { ProjectContributorsPipe } from '../project-contributors.pipe';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [FirebaseService, ProjectContributorsPipe]
})
export class ProjectDetailComponent implements OnInit {
  projectID: string;
  amount: number;
  name: string;
  contributors;
  project;
  constructor(private projectContributors: ProjectContributorsPipe, private route: ActivatedRoute, private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.projectID = this.route.params['_value']['id'];
    this.firebaseService.getProjectByID(this.projectID).subscribe(data => { this.project = data });
    this.contributors = this.firebaseService.getPayments();
  }

  savePayment(){
    let newPayment = new Payment({
      name: this.name,
      amount: this.amount,
      project: this.projectID
    });
    this.firebaseService.savePayment(newPayment);
  }
}
