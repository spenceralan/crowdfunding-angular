export class Project {
  title: string;
  managers: string;
  description: string;
  category: string;
  fundingTarget: string;
  swag: string;

  constructor(values) {
    this.title = values.title || "Untitled";
    this.managers = values.manager || "None";
    this.description = values.description || "No description";
    this.category = values.category || "Uncategorized";
    this.fundingTarget = values.funding_target || "0";
    this.swag = values.swag || "No swag";
  }
}
