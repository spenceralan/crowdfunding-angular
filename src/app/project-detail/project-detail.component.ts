import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Project } from '../project.model';
import { FirebaseService } from '../firebase.service';
import { StripeService } from '../stripe.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [FirebaseService, StripeService]
})
export class ProjectDetailComponent implements OnInit {
  projectID: string;
  amount: number;
  project;
  constructor(private stripe: StripeService, private route: ActivatedRoute, private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.projectID = this.route.params['_value']['id'];
    this.firebaseService.getProjectByID(this.projectID).subscribe(data => { this.project = data });
  }

  openCheckout(amount){
    this.stripe.openCheckout(this.project.title, amount);
  }

}
