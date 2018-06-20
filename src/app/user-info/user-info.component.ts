import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.css"]
})
export class UserInfoComponent implements OnInit {
  public data: any = {};
  public data1: any = [];

  constructor(public userService: UserService) {}

  ngOnInit() {
    console.log("data: ", this.userService.userData);
    this.data = this.userService.userData;
    this.data1.push(this.data);
    console.log('data1',this.data1);
  }
}
