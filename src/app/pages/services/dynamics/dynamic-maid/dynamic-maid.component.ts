import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamicComponent';
import { Router } from '@angular/router';
import { ServicesResultService } from '../../services-result/services-result.service';
import { IProvider } from 'src/app/core/interfaces/iProvider';
import { IDynamicValue } from 'src/app/core/interfaces/IDynamicValue';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-dynamic-maid',
  templateUrl: './dynamic-maid.component.html',
  styleUrls: ['./dynamic-maid.component.css']
})
export class DynamicMaidComponent implements OnInit, DynamicComponent {

  rooms = [];
  days;
  dataResult = [];

  constructor(
    private router: Router,
    private servicesResultService: ServicesResultService,
    private userService: UserService) { }

  send(direct: boolean): void {
    if (direct) {
      this.servicesResultService.execute('domestica').subscribe(userList => {
        const users = userList.filter(user => user.user.id != this.userService.userToken.id);
        for (let u in users) {
          this.dataResult.push({
              jobName:users[u].jobName,
              user: {
                id: users[u].user.id, 
                name: users[u].user.name,
                avatarUrl: users[u].user.avatarUrl,
                telefone: users[u].user.telefone,
                email: users[u].user.email             
              },
              rate: users[u].rate,
              value: null
          });
        } 
        this.getValues(this.dataResult);
      });
    } else {
      this.router
        .navigate(
          ['servicesResult',
            {
              serviceName: 'domestica',
              dynamic: false
            }
          ]);
    }
  }
  getValues(dataSource: any[]) {
    let newArray = {
      users: dataSource,
      rooms: this.rooms,
      days: this.days
    };
    this.servicesResultService
      .getValues('/configMaid/getValues/', newArray)
      .subscribe(result => {
        this.setValues(result)
      });
  }
  setValues(value: IDynamicValue[]) {
    for (let u in this.dataResult) {
      this.dataResult[u].value = value.filter(user => user.userId == this.dataResult[u].user.id)[0].value;
    };
    this.router.navigate(['servicesResult',
      {
        serviceName: 'domestica',
        dynamic: true,
        data: JSON.stringify(this.dataResult)
      }
    ]);
  }

  addRoom() {
    this.rooms.push(
      {
        seqRoom: this.rooms.length + 1,
        length: 0,
        cleaningType: 0
      });
  }

  removeRoom() {
    let rooms = this.rooms.filter(rooms => rooms.seqRoom != this.rooms.length);
    if (rooms.length) {
      this.rooms = rooms;
    }
  }

  ngOnInit(): void {
    this.addRoom();
  }

}
