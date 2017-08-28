import { observable, action } from 'mobx';

export default class HomeViewStore {
  @observable card1 = true;

  @action
  customaction(data) {
    this.card1 = data;
  }
}
