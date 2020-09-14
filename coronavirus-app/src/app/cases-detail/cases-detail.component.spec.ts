import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesDetailComponent } from './cases-detail.component';

describe('CasesDetailComponent', () => {
  let component: CasesDetailComponent;
  let fixture: ComponentFixture<CasesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
