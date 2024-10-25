class Developer {
  #name;
  constructor(name) {
    this.#name = name;
  }

  set developerName(name) {
    this.#name = name;
  }

  get developerName() {
    return this.#name;
  }

  code() {
    console.log(`${this.#name} is coding`);
  }
}

class FrontendDeveloper extends Developer {
  constructor(name) {
    super(name);
  }

  createLayout() {
    console.log(`${this.name} created layout`);
  }

  createAnimation() {
    console.log(`${this.name} created animation`);
  }

  createUI() {
    this.createLayout();
    this.createAnimation();
    console.log(`${this.name} created UI`);
  }
}

class BackendDeveloper extends Developer {
  constructor(name) {
    super(name);
  }

  createApi() {
    console.log(`${this.name} created API`);
  }

  createDb() {
    console.log(`${this.name} created DB`);
  }

  buildCrud() {
    console.log(`${this.name} created CRUD`);
  }

  manageAPI() {
    this.createApi();
    this.createDb();
    this.buildCrud();
    console.log(`${this.name} managed API`);
  }
}

class Designer {
  constructor(name) {
    this.name = name;
  }

  createDesign() {
    console.log(`${this.name} created design.`);
  }
}

class UiDesigner extends Designer {
  constructor(name) {
    super(name);
  }

  createUIDesign() {
    console.log(`${this.name} created UI design.`);
  }
}

class Printer {
  print() {
    console.log("Printing...");
  }
}

class ProjectReport extends Printer {
  print() {
    console.log("Printing project report...");
  }
}

class Project {
  constructor(uiDesigner, frontendDev, backendDev, printer) {
    this.uiDesigner = uiDesigner;
    this.frontendDev = frontendDev;
    this.backendDev = backendDev;
    this.printer = printer;
  }

  build() {
    this.uiDesigner.createUIDesign();
    this.frontendDev.createUI();
    this.backendDev.manageAPI();
    console.log("Project built successfully.");
    this.printer.print();
  }
}

const uiDesigner = new UiDesigner("Alexsa");
const frontendDev = new FrontendDeveloper("Sophie");
const backendDev = new BackendDeveloper("Alex");
const printer = new ProjectReport();

const websiteProject = new Project(
  uiDesigner,
  frontendDev,
  backendDev,
  printer
);
websiteProject.build();
