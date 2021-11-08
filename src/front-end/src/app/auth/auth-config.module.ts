import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://login.microsoftonline.com/{azure-tenant}/v2.0',
        authWellknownEndpointUrl:
          'https://login.microsoftonline.com/{azure-tenant}/v2.0/.well-known/openid-configuration',
        redirectUrl: `${window.location.origin}/auth`,
        clientId: '{client-id}',
        scope: 'openid profile email api://{api-id}/mondash', // 'openid profile offline_access ' + your scopes
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        issValidationOff: false,
        autoUserInfo: false,
        disableIatOffsetValidation: true,
        logLevel: LogLevel.Debug,
        refreshTokenRetryInSeconds: 20,
        // customParamsAuthRequest: {
        //   prompt: 'select_account', // login, consent
        // },
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
