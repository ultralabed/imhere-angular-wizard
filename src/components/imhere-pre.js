import angular from 'angular';

class Controller {

  constructor() {
  }
  pre(){
    this.wizardCtrl.preStep();
  }

}

const component = {
  bindings: {
  },
  restrict: 'EA',
  transclude: true,
  require: {
    wizardCtrl: '^imhereWizard'
  },
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-pre.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-pre', [])
  .component('imherePre', component);