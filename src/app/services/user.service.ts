import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public static userData;

  get userData() {
    return UserService.userData;
  }

  set userData(value) {
    UserService.userData = value;
  }

  constructor() {}
}
