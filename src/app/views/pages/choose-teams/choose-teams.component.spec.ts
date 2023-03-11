import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTeamsComponent } from './choose-teams.component';

describe('ChooseTeamsComponent', () => {
  let component: ChooseTeamsComponent;
  let fixture: ComponentFixture<ChooseTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
