import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ListArtiComponent } from './list-arti/list-arti.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/articulos'},
  {path: 'admin', component: AdminComponent},
  {path: 'articulos', component: ListArtiComponent},
  {path: '**', redirectTo: '/articulos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
