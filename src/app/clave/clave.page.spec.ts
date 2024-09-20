import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClavePage } from './clave.page';

describe('ClavePage', () => {
  let component: ClavePage;
  let fixture: ComponentFixture<ClavePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
