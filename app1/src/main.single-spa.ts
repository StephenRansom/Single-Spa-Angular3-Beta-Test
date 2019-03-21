import 'core-js/es7/reflect';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import singleSpaAngular from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {ApplicationRef} from '@angular/core';
import { Router } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

export default singleSpaAngular({
  mainModule: AppModule,
  angularPlatform: platformBrowserDynamic(),
  template: '<app-root />',  
  Router,
  ApplicationRef,
  domElementGetter() {
    let containerEl = document.getElementById('<app');
    if (!containerEl) {
      containerEl = document.createElement('div');
      containerEl.id = '<app';
      document.body.appendChild(containerEl);
    }

    return containerEl;
  },
});
