import { observable, action } from 'mobx';

export default class AboutViewStore {
  @observable list = [];

  getData = async () => {
    const response = await fetch('http://');
    const data = response.json;
  };

  @action
  setList(data) {
    this.list = data;
  }
}
