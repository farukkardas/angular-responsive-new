import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './pages/parent/parent.component';
import { ServicesComponent } from './pages/service/services.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: "",component:ParentComponent},
  {path:'products',component:ServicesComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
