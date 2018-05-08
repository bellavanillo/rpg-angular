import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenarioComponent }   from './scenario/scenario.component';
import { Scenario1Component }   from './scenario1/scenario1.component';
import { Scenario2Component }   from './scenario2/scenario2.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'scenario',
    component: ScenarioComponent
  },
  {
    path: 'scenario1',
    component: Scenario1Component
  },
  {
    path: 'scenario2',
    component: Scenario2Component
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
