import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCrewComponent } from './home-crew.component';

describe('HomeCrewComponent', () => {
  let component: HomeCrewComponent;
  let fixture: ComponentFixture<HomeCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCrewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
