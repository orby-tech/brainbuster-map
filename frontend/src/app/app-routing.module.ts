import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './views/graph/graph.component';

const routes: Routes = [
  {
    title: 'graph',
    path: 'graph',
    component: GraphComponent,
  },
  {
    path: '**',
    redirectTo: 'graph',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
