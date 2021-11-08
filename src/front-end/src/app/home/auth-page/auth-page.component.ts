import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  constructor(
    private oidcService: OidcSecurityService,
    private router: Router
  ) {}

  back() {
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    this.oidcService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
        console.log(userData);
        console.log(accessToken);
        console.log(idToken);
      });
  }
}
