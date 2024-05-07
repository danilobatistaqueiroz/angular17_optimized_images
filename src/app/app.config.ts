import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ImagekitioAngularModule } from 'imagekitio-angular';
import { environment } from'../environments/environment';
import { provideImageKitLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideImageKitLoader('https://ik.imagekit.io/fhp1ju3os/')  ]
};
