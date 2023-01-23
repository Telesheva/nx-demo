import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CorePageLayoutComponent } from './page-layout.component';

describe('CorePageLayoutComponent', () => {
  let component: CorePageLayoutComponent;
  let fixture: ComponentFixture<CorePageLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CorePageLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorePageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
