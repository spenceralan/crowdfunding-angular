export class Payment {

  name: string;
  amount: number;
  email: string;
  project: string;

  constructor(values) {
    this.name = values.name || "Anonymous"
    this.amount = values.amount
    this.email = values.email || "Anonymous"
    this.project = values.project
  }

}
