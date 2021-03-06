import {  Component, Output, EventEmitter} from '@angular/core';
import { User } from './../../../shared/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = new User();
  // users: Array<User>=[];
  @Output() onCreate: EventEmitter<User> = new EventEmitter<User>();

  onSubmitUserForm(userForm:NgForm){
    // this.users.push(this.user);
    this.onCreate.emit(this.user);
    this.user=new User();
    userForm.reset();
  }
}
