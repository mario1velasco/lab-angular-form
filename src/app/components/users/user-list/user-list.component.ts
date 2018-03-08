import { Component } from '@angular/core';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent{
  users:Array<User>=[];
  index:number=0;

  onCreateUser(user:User){
    user.index=this.index;
    this.index +=1;
    this.users.push(user);
  }
  onDeleteUser(user:User){
    this.users.forEach((currentUser, index) => {
      if(user.index===currentUser.index){
        this.users.splice(index,1);
      }
    });
  }

}
