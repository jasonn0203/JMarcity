import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrl: './user-options.component.css',
})
export default class UserOptionsComponent implements OnInit {
  @Input() loginStatus: boolean = false;
  ngOnInit(): void {}
}
