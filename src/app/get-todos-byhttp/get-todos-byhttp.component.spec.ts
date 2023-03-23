import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTodosByhttpComponent } from './get-todos-byhttp.component';

describe('GetTodosByhttpComponent', () => {
  let component: GetTodosByhttpComponent;
  let fixture: ComponentFixture<GetTodosByhttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTodosByhttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTodosByhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
