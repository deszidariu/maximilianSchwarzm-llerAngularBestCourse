import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  imports: [Header, User],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS;

  onSelectUser(userId: string) {
    alert(`Selected user ID: ${userId}`);
  }
}
