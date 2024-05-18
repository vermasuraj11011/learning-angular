import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[
    `
      .online {
        color: white;
      }
    `
  ]
})
export class ServerComponent {
  server_id = 10;
  server_status = 'offline'

  constructor() {
    this.server_status = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getServerStatus() {
    return this.server_status;
  }

  getColour() {
    return (this.server_status === 'offline') ? 'red' : 'green'
  }
}
