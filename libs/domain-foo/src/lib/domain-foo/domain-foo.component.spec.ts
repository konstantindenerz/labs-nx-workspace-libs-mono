import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainFooComponent } from './domain-foo.component';

describe('DomainFooComponent', () => {
  let component: DomainFooComponent;
  let fixture: ComponentFixture<DomainFooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainFooComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DomainFooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
