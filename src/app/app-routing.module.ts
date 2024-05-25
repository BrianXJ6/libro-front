import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './pages/list/list.component';
import { PageDetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listagem',
    pathMatch: 'full',
  },
  {
    path: 'listagem',
    component: PageListComponent,
    title: 'Listagem de filmes',
  },
  {
    path: 'detalhes/:id',
    component: PageDetailComponent,
    title: 'Detalhes',
  },
  { path: '**', redirectTo: 'listagem' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
