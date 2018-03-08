import {
  Component
} from '@angular/core';
import {
  User
} from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: Array < User >= [];
  usersSearch: Array < User >= [];
  index: number = 0;
  searchUser: string = "";

  onCreateUser(user: User) {
    user.index = this.index;
    this.index += 1;
    this.users.push(user);
    this.usersSearch=this.users;
  }
  onDeleteUser(user: User) {
    this.users.forEach((currentUser, index) => {
      if (user.index === currentUser.index) {
        this.users.splice(index, 1);
      }
    });
  }
  newSearch() {
    this.usersSearch = this.users;
    this.usersSearch = this.usersSearch.filter((user) => {      
      return user["name"].includes(this.searchUser);
    });
  }

}
