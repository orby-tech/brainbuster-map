import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { QuestionItem } from '@common/graph/types';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: QuestionItem,
    public dialog: MatDialog
  ) {}
}
