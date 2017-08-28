import { observable, action } from 'mobx';

class AboutViewStore {
  @observable card1 = true;
  @observable card2 = false;
  @observable card3 = false;
  @observable
  text1 = 'We at GeekyAnts specialize in web and mobile product development. We build web and mobile applications and are passionate about building industry leading software products,delighting our customers, and giving back to the developer community.';
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
  @action
  setCard3(data) {
    this.card3 = data;
  }
  @action
  setText1(data) {
    this.text1 = data;
  }
  @action
  setText2(data) {
    this.text2 = data;
  }
  @action
  setText3(data) {
    this.text3 = data;
  }
  @action
  toggleCard1() {
    this.card1 = !this.card1;
    if (this.text1 === '') {
      this.text1 =
        'We at GeekyAnts specialize in web and mobile product development. We build web and mobile applications and are passionate about building industry leading software products,delighting our customers, and giving back to the developer community.';
    } else {
      this.text1 = '';
    }
  }
  @action
  toggleCard2() {
    this.card2 = !this.card2;
    if (this.text2 === '') {
      this.text2 =
        'Our vision is to improve our services  which really helps the users to make day to day life easier and happier. We are staffed with young, passionate people working tirelessly to make a difference in the lives of people. Our aim is to work continuously based on the feedbacks provided by the community and deliver a reliable solution.';
    } else {
      this.text2 = '';
    }
  }
  @action
  toggleCard3() {
    this.card3 = !this.card3;
    if (this.text3 === '') {
      this.text3 =
        'At My Elita, we provide you with a variety of at-home services that simplify your everyday living. You can book a wide range of services, create and join groups of your interests and socialize with people living in the neighbourhood.';
    } else {
      this.text3 = '';
    }
  }
}
// const AboutViewStore = new AboutviewStore();
export default AboutViewStore;
