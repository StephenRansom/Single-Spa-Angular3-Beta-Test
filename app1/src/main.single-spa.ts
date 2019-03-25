import 'core-js/es7/reflect';

import { enableProdMode, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import singleSpaAngular from 'single-spa-angular';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export default singleSpaAngular({
  mainModule: AppModule,
  angularPlatform: platformBrowserDynamic(),
  template: '<app-root />',
  ApplicationRef,
  Router,
  domElementGetter() {
    let containerEl = document.getElementById('app1');
    if (!containerEl) {
      containerEl = document.createElement('div');
      containerEl.id = 'app1';
      document.body.appendChild(containerEl);
    }

    return containerEl;
  },
});
