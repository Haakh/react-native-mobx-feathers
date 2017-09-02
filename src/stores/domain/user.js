import { observable, action } from 'mobx';

class AboutViewStore {
  @observable card1 = true;
  @observable card2 = false;
  @observable card3 = false;
  @observable text2 = '';
  @observable text3 = '';
  @action
  setCard1(data) {
    this.card1 = data;
  }
  @action
  setCard2(data) {
    this.card2 = data;
  }
}
// const AboutViewStore = new AboutviewStore();
export default AboutViewStore;
