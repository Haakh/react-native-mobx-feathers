import { observable, action } from 'mobx';

export default class LoginViewStore {
  @observable card1 = true;

  @action
  customaction(data) {
    this.card1 = data;
  }
}
