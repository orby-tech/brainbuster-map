import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapSvgComponent } from './roadmap-svg.component';

describe('RoadmapSvgComponent', () => {
  let component: RoadmapSvgComponent;
  let fixture: ComponentFixture<RoadmapSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
