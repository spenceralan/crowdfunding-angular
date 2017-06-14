import { Pipe, PipeTransform } from '@angular/core';
import { Payment } from './payment.model';
import { Project } from './project.model';


@Pipe({
  name: 'projectContributors'
})
export class ProjectContributorsPipe implements PipeTransform {

  transform(payments: Payment[], project): any {
    if (payments) {
      return payments.filter(function(payment){
        return payment.project === project.$key;
      })
    }
  }

}
