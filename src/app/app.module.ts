import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { UserItemComponent } from './components/users/user-item/user-item.component';
import { UserListComponent } from './components/users/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserItemComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
