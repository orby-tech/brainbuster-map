import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import { Topic } from '@common/graph/types';
import { BehaviorSubject, combineLatest, first, map, tap } from 'rxjs';
import { GraphService } from 'src/app/graphql/graph.service';
import { PassTestComponent } from '../dialogs/pass-test/pass-test.component';

interface FoodNode {
  title: string;
  children?: FoodNode[];
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent {
  topics$ = this.graphService.topics$;

  pickedTopic$ = new BehaviorSubject<Topic | null>(null);
  parentTopics$ = combineLatest([this.topics$, this.pickedTopic$]).pipe(
    map(([topics, pickedTopic]) => {
      return topics.filter((t) => {
        return !!t.children.find((c) => c === pickedTopic?.title);
      });
    })
  );

  childrenTopics$ = combineLatest([this.topics$, this.pickedTopic$]).pipe(
    map(([topics, pickedTopic]) =>
      pickedTopic?.children.map((c) => topics.find((t) => t.title === c)).filter(x=> x) as Topic[]
    )
  );

  childrens$ = combineLatest([this.topics$, this.pickedTopic$]).pipe(
    map(([topics, pickedTopic]) =>
      pickedTopic?.children.map((c) => ({
        title: c,
        questionsCount: this.getTotalQuestions(
          topics.find((t) => t.title === c) || null,
          topics
        ),
      }))
    )
  );

  totalQuestions$ = combineLatest([this.topics$, this.pickedTopic$]).pipe(
    map(([topics, pickedTopic]) => this.getTotalQuestions(pickedTopic, topics))
  );

  constructor(private graphService: GraphService, public dialog: MatDialog) {
    this.pickedTopic$.subscribe((t) => {
      if (!t) {
        return;
      }

      localStorage.setItem('pickedTopic', t.title);
    });

    this.topics$.subscribe((topics) => {
      {
        if (this.pickedTopic$.getValue()) {
          return;
        }

        this.pickedTopic$.next(
          topics.find((t) => t.title === localStorage.getItem('pickedTopic')) ||
            topics.find((t) => t.title === 'Web Development') ||
            null
        );
      }
    });
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.title,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  pick(title: string | null) {
    if (!title) {
      return;
    }
    if (title === 'back') {
     
    } else {
      this.topics$.pipe(first()).subscribe((topics) => {
        this.pickedTopic$.next(topics.find((t) => t.title === title) || null);
      });
    }
  }

  passTest() {
    const dialogRef = this.dialog.open(PassTestComponent, {
      data: { topic: this.pickedTopic$.getValue()?.title },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  getTotalQuestions(topic: Topic | null, topics: Array<Topic>): number {
    if (!topic) {
      return 0;
    }
    return (
      topic.questions.length +
      topic.children
        .map((c) =>
          this.getTotalQuestions(
            topics.find((t) => t.title === c) || null,
            topics
          )
        )
        .reduce((partialSum, a) => partialSum + a, 0)
    );
  }
}
