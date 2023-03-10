import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooseballTeamComponent } from './fooseball-team.component';

describe('FooseballTeamComponent', () => {
  let component: FooseballTeamComponent;
  let fixture: ComponentFixture<FooseballTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooseballTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooseballTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
