import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ScheduleViewerComponent } from './schedule-viewer/schedule-viewer.component';
import { ScheduleEventComponent } from './schedule-event/schedule-event.component';

// add path and component type here
const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'schedule', component: ScheduleViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  
    //ScheduleEventComponent
  ]
})
export class AppRoutingModule { }

// Add components to be exported to app.module.ts
export const routeComponents = [LoginFormComponent, ScheduleViewerComponent]
