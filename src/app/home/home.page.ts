import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { NavController } from "@ionic/angular";
import { Socket } from "ng-socket-io";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  nickname = "";

  constructor(
    /*public navCtrl: NavController,*/ public router: Router,
    private socket: Socket
  ) {}

  joinChat() {
    this.socket.connect();
    this.socket.emit("set-nickname", this.nickname);
    // this.navCtrl.push('ChatRoomPage', {nickname: this.nickname});
    this.router.navigate(["/chat-room/", { nickname: this.nickname }]);
  }
}
