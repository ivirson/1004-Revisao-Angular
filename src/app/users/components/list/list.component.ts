import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public users!: User[];

  ngOnInit(): void {
    this.getUsers();
  }

  handleSaveUser(user: User): void {
    this.users.push(user);
    this.setUsers();
  }

  handleEditUser(user: User): void {
    this.getUsers();
    const index = this.users.findIndex((u) => u.id === user.id);
    this.users[index] = user;
    this.setUsers();
  }

  deleteUser(id: string): void {
    this.getUsers();
    // const index = this.users.findIndex((u) => u.id === id);
    this.users = this.users.filter((user) => user.id !== id);
    this.setUsers();
  }

  getUsers(): void {
    this.users = JSON.parse(localStorage.getItem('USERS') || '[]');
  }

  setUsers(): void {
    localStorage.setItem('USERS', JSON.stringify(this.users));
  }
}
