import { observable } from 'mobx';

export default class AuthUserModel {
  @observable _id;
  @observable name;
  @observable phoneNumber;
  @observable flatNo;
  @observable floorNo;
  @observable buildingNo;
  @observable deviceId;
  @observable expoToken;
  @observable image = '';
  otp;
  verified;
  constructor(obj) {
    this.name = obj.name;
    this._id = obj._id;
    this.flatNo = obj.flatNo;
    this.floorNo = obj.floorNo;
    this.phoneNumber = obj.phoneNumber;
    this.buildingNo = obj.buildingNo;
    this.deviceId = obj.deviceId;
    this.otp = obj.otp;
    this.verified = obj.verified;
    this.image = obj.image;
    this.expoToken = obj.expoToken;
  }
}
