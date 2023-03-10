import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPlayersComponent } from './assign-players.component';

describe('AssignPlayersComponent', () => {
  let component: AssignPlayersComponent;
  let fixture: ComponentFixture<AssignPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
