import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() public user!: string;
  @Output() private logoutEmitter = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  logout() {
    this.logoutEmitter.emit();
  }
}
