import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @Input() public user?: User;
  @Output() public saveUserEmitter = new EventEmitter<User>();
  @Output() public editUserEmitter = new EventEmitter<User>();

  public id?: string;
  public name?: string;
  public password?: string;

  constructor() {}

  ngOnInit() {
    if (this.user) {
      this.id = this.user.id;
      this.name = this.user.name;
      this.password = this.user.password;
    }
  }

  onSave() {
    this.user = {
      name: this.name!,
      password: this.password!,
    };

    if (this.id) {
      this.user.id = this.id;
      this.editUserEmitter.emit(this.user);
    } else {
      this.user.id = crypto.randomUUID();
      this.saveUserEmitter.emit(this.user);
    }

    this.name = undefined;
    this.password = undefined;
  }
}
