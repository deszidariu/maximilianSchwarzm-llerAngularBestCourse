import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

// type UserType = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface UserType {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  //input without signal
  @Input({required: true}) user!: UserType;

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  //simple output
  @Output() select = new EventEmitter<string>();

  //output as function (is not a signal like input function)
  //select = output<string>();

  //inputs with signals
  // avatar = input.required<string>();//inputs with signals
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return `assets/users/${this.avatar()}`;
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
