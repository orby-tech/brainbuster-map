import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph/graph.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../material/material.module';
import { QuestionComponent } from './dialogs/question/question.component';
import { PassTestComponent } from './dialogs/pass-test/pass-test.component';
import { GraphSvgComponent } from './graph/graph-svg/graph-svg.component';
import { SharePageComponent } from './share-page/share-page.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { RoadmapSvgComponent } from './graph/roadmap-svg/roadmap-svg.component';

@NgModule({
  declarations: [
    GraphComponent,
    QuestionComponent,
    PassTestComponent,
    GraphSvgComponent,
    SharePageComponent,
    RoadmapSvgComponent,
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MaterialModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [GraphComponent],
})
export class ViewsModule {}
