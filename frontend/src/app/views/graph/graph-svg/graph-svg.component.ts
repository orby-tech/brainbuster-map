import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Topic } from '@common/graph/types';
import { BehaviorSubject, combineLatest, debounceTime, map, tap } from 'rxjs';

@Component({
  selector: 'app-graph-svg',
  templateUrl: './graph-svg.component.svg',
  styleUrls: ['./graph-svg.component.scss'],
})
export class GraphSvgComponent implements AfterViewInit {
  @Input() set pickedTopic(pickedTopic: Topic | null) {
    this.pickedTopic$.next(pickedTopic);
  }

  @Input() set parentTopics(parentTopics: Topic[] | null) {
    this.parentTopics$.next(parentTopics || []);
  }

  @Input() set childrenTopics(childrenTopics: Topic[] | null | undefined) {
    this.childrenTopics$.next(childrenTopics || []);
  }

  svgWidth$ = new BehaviorSubject<number>(500);
  svgHeight$ = new BehaviorSubject<number>(500);

  pickedTopicPosition$ = combineLatest([this.svgWidth$, this.svgHeight$]).pipe(
    map(([svgWidth, svgHeight]) => {
      return {
        x: svgWidth / 2 + 'px',
        y: svgHeight / 2 + 'px',
      };
    })
  );

  pickedTopic$ = new BehaviorSubject<Topic | null>(null);
  parentTopics$ = new BehaviorSubject<Topic[]>([]);
  childrenTopics$ = new BehaviorSubject<Topic[]>([]);

  parantTopicsToSvg$ = combineLatest([
    this.parentTopics$,
    this.svgWidth$,
    this.svgHeight$,
    this.pickedTopicPosition$,
  ]).pipe(
    map(([parentTopics, svgWidth, svgHeight, pickedTopicPosition]) => {
      const parentTopicsLength = parentTopics.length;
      return parentTopics.map((t, i) => {
        const angel = (Math.PI / parentTopicsLength / 2) * (i * 2 + 1);
        const rotationAngelNotCleared = (angel / Math.PI) * 360;
        const rotationAngel =
          rotationAngelNotCleared === 180 ? 0 : rotationAngelNotCleared;

        const x = svgWidth * (1 + Math.cos(angel) * 0.75) * 0.5;
        const y = svgHeight * (1 - Math.sin(angel) * 0.75) * 0.5;
        return {
          title: t.title.split(' '),
          transform: ` translate(${x},${y}) `,
          x: x,
          y: y,
          vector: {
            x1: svgWidth / 2 + (x - svgWidth / 2) * 0.1,
            y1: svgHeight / 2 + (y - svgHeight / 2) * 0.1,
            x2: svgWidth / 2 + (x - svgWidth / 2) * 0.9,
            y2: svgHeight / 2 + (y - svgHeight / 2) * 0.9,
          },
        };
      });
    })
  );

  childrenTopicsToSvg$ = combineLatest([
    this.childrenTopics$,
    this.svgWidth$,
    this.svgHeight$,
    this.pickedTopicPosition$,
  ]).pipe(
    map(([childrenTopics, svgWidth, svgHeight, pickedTopicPosition]) => {
      const childrenTopicsTopicsLength = childrenTopics.length;
      return childrenTopics.map((t, i) => {
        const angel =
          (Math.PI / childrenTopicsTopicsLength / 2) * (i * 2 + 1) + Math.PI;
        const rotationAngelNotCleared = (angel / Math.PI) * 360;
        const rotationAngel =
          rotationAngelNotCleared === 180 ? 0 : rotationAngelNotCleared;

        const x = svgWidth * (1 + Math.cos(angel) * 0.75) * 0.5;
        const y = svgHeight * (1 - Math.sin(angel) * 0.75) * 0.5;
        return {
          title: t.title.split(' '),
          transform: ` translate(${x},${y}) `,
          x: x,
          y: y,
          vector: {
            x1: svgWidth / 2 + (x - svgWidth / 2) * 0.1,
            y1: svgHeight / 2 + (y - svgHeight / 2) * 0.1,
            x2: svgWidth / 2 + (x - svgWidth / 2) * 0.9,
            y2: svgHeight / 2 + (y - svgHeight / 2) * 0.9,
          },
        };
      });
    })
  );

  topics$ = combineLatest([
    this.childrenTopicsToSvg$,
    this.parantTopicsToSvg$,
  ]).pipe(map((x) => x.flat()));

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const myEl = document.querySelector('#host');
    if (!myEl) {
      return;
    }
    const observer = new ResizeObserver((x) => {
      this.svgWidth$.next(x[0].contentRect.width);
      this.cd.detectChanges();
    });
    observer.observe(myEl);
  }
}
