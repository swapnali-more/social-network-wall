import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.userService.user = undefined;
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
