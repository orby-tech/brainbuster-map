import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject, map } from 'rxjs';
import { GraphService } from 'src/app/graphql/graph.service';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-pass-test',
  templateUrl: './pass-test.component.html',
  styleUrls: ['./pass-test.component.scss'],
})
export class PassTestComponent {
  recomendations$ = new BehaviorSubject<string[]>([]);

  filteredRecomendations$ = this.recomendations$.pipe(
    map(
      (recomendations) =>
        Array.from(new Set<string>(recomendations)) as string[]
    )
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { topic: string },
    private graphService: GraphService,
    public dialog: MatDialog
  ) {}

  callQuestion() {
    this.graphService.getQuestion(this.data.topic).subscribe((question) => {
      const dialogRef = this.dialog.open(QuestionComponent, {
        data: question,
      });

      dialogRef.afterClosed().subscribe((result) => {
        const checkResult = this.graphService
          .checkAnswer(result, question.question)
          .subscribe((recomendations) => {
            if (recomendations) {
              this.recomendations$.next([
                ...this.recomendations$.getValue(),
                ...recomendations.recomendations,
              ]);
            }
            if (result) {
              this.callQuestion();
            }
          });
      });
    });
  }
}
