import { Component, Input } from '@angular/core';
import { Topic } from '@common/graph/types';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-roadmap-svg',
  templateUrl: './roadmap-svg.component.svg',
  styleUrls: ['./roadmap-svg.component.scss'],
})
export class RoadmapSvgComponent {
  @Input() set pickedTopic(pickedTopic: Topic | null) {
    this.pickedTopic$.next(pickedTopic);
  }

  @Input() set topics(topics: Topic[] | null) {
    this.topics$.next(topics || []);
  }

  @Input() set svgWidth(svgWidth: number | null) {
    this.svgWidth$.next(svgWidth || 500);
  }

  pickedTopic$ = new BehaviorSubject<Topic | null>(null);
  topics$ = new BehaviorSubject<Topic[]>([]);

  svgWidth$ = new BehaviorSubject<number>(500);

  roadmapStates$ = combineLatest([this.topics$, this.pickedTopic$]).pipe(
    map(([topics, pickedTopic]) => {
      const pickedTopicChildren =
        topics.find((t) => t.title === pickedTopic?.title)?.children || [];
      let allSubChildsCount = 0;
      return pickedTopicChildren.map((c, i) => {
        const subChilds = topics.find((t) => t.title === c)?.children || [];
        allSubChildsCount += subChilds.length;
        return {
          title: c,
          subChilds,
          gap: (i + 1) * 100 + (allSubChildsCount - subChilds.length) * 28,
        };
      });
    })
  );

  svgHeight$ = this.roadmapStates$.pipe(
    map((states) => {
      return states[states.length - 1]?.gap || 0 + 100;
    })
  );

  toRoman(num: number): string {
    const roman: {
      [key: string]: number;
    } = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let str = '';
    const keys = Object.keys(roman);
    for (const i of keys) {
      const q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }

    return str;
  }
}
