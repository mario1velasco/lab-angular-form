import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from './../../../shared/models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() user: User = new User();
  @Output() onDelete: EventEmitter<User> = new EventEmitter<User>();
  onDeleteUser(container){
    console.log(container);
    
    console.log(this.user);
    this.onDelete.emit(this.user);
  }
}
