import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'ui-demo', pathMatch: 'full' },
  { path: 'ui-demo', loadComponent: () => import('./views/ui-demo/ui-demo.component').then(m => m.UiDemoComponent) },
  { path: 'goblin-tasks', loadComponent: () => import('./views/goblin-tasks/goblin-tasks-view.component').then(m => m.GoblinTasksViewComponent) },
  { path: 'raid-squad', loadComponent: () => import('./views/raid-squad/raid-squad-view.component').then(m => m.RaidSquadViewComponent) },
  { path: '**', redirectTo: 'ui-demo' }
];
