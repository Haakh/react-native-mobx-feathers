import { observable } from 'mobx';

export default class ListModel {
  @observable id;
  @observable title;
  @observable data;
  @observable live;

  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.data = obj.data;
    this.live = obj.live;
  }
}
