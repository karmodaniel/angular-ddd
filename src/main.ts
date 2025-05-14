import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/domain.config';
import { DomainComponent } from './app/domain.component';

bootstrapApplication(DomainComponent, appConfig)
  .catch((err) => console.error(err));
