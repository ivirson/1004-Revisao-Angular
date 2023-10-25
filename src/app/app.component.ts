import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public user: string = 'Renato';

  public handleLogout(): void {
    console.log('Usuário deslogado');
  }

  ngOnInit(): void {}
}
