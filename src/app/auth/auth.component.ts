import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    if (!!localStorage.getItem('login')) {
      this.router.navigateByUrl('/products');
    }
  }

  ngOnInit(): void {
  }

  public login(): void{
    localStorage.setItem('login', 'true');
    this.router.navigateByUrl('/products');
  }

}
