import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'

import { routes } from './app.routes';
//preloading sirve para que una ves que angular ya cargo la pagina inicial carge los otros archivos en el tiempo muerto
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),
    provideHttpClient()
  ]
};
