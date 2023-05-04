import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph/graph.component';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from '../material/material.module';
import { QuestionComponent } from './dialogs/question/question.component';
import { PassTestComponent } from './dialogs/pass-test/pass-test.component';
import { GraphSvgComponent } from './graph/graph-svg/graph-svg.component';
import { SharePageComponent } from './share-page/share-page.component';

@NgModule({
  declarations: [GraphComponent, QuestionComponent, PassTestComponent, GraphSvgComponent, SharePageComponent],
  imports: [CommonModule, MatTreeModule, MatIconModule, MaterialModule],
  providers: [GraphComponent],
})
export class ViewsModule {}
