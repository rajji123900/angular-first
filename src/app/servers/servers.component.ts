import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = "No server was created!"
  serverName:string = 'Demo'
  serverCreated = false
  servers = ['Test1' ,'Test2']

  constructor() { 
   setTimeout(() => {
     this.allowNewServer = true
   }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer()  {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server was created! Name is " + this.serverName 
  }

  onChangeServerName(event:any){
    this.serverName = event.target.value
  }

}
