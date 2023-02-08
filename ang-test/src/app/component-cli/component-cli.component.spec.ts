import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCli } from './component-cli.component';

describe('ComponentCliComponent', () => {
  let component: ComponentCli;
  let fixture: ComponentFixture<ComponentCli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCli ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentCli);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
