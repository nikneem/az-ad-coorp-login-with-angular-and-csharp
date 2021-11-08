import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public isAuthenticated: boolean;
  public responseJson: string = 'undefined';

  constructor(
    private oidcService: OidcSecurityService,
    private http: HttpClient
  ) {
    this.isAuthenticated = false;
  }

  login() {
    this.oidcService.authorize();
  }
  backendcall() {
    console.log('Making the call');
    this.http
      .get<string>('https://localhost:5001/weatherforecast')
      .subscribe((r) => {
        this.responseJson = r;
      });
    this.http
      .get<string>('https://localhost:5001/weatherforecast/x')
      .subscribe((r) => {
        this.responseJson = r;
      });
  }

  ngOnInit(): void {
    this.oidcService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
        this.isAuthenticated = isAuthenticated;
        console.log(userData);
        console.log(accessToken);
        console.log(idToken);
      });
  }
}
