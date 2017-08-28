import { observable, action } from 'mobx';
import ListModel from '../../models/list';

export default class {
  @observable list = [];

  getData = async () => {
    const response = await fetch('http://');
    const data = response.json;
  };

  changeList = (data) => {
    const obj = new ListModel(data);
    this.setList(obj);
  };

  @action
  toggleLive = (index) => {
    this.list[index].live = !this.list[index].live;
  };

  @action
  setToggle(data) {
    this.list = data;
  }

  @action
  setList(data) {
    this.list.push(data);
    console.log(this.list);
  }
}
