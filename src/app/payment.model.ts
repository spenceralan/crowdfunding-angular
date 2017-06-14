export class Payment {

  name: string;
  amount: number;
  project: string;

  constructor(values) {
    this.name = values.name || "Anonymous",
    this.amount = values.amount || 0,
    this.project = values.project
  }

}
