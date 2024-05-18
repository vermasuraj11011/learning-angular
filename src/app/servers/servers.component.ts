import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowedNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Enter the name of the server here...'
  isServerCreated = false;
  servers = ['Server 1', 'Server 2',]

  constructor() {

    setTimeout(() => {
      this.allowedNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.serverCreationStatus = 'Server was created ' + this.serverName;
    this.servers.push(this.serverName)
  }

  ngOnInit(): void {
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
