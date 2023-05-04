import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './views/graph/graph.component';
import { SharePageComponent } from './views/share-page/share-page.component';

const routes: Routes = [
  {
    title: 'graph',
    path: 'graph',
    component: GraphComponent,
  },
  {
    title: 'share',
    path: 'share/:userName/:topic',
    component: SharePageComponent,
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
