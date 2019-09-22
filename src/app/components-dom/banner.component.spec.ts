import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BannerComponent } from './banner.component';

describe('Test component\'s DOM', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
  });
  it('should be defined', () => {
    expect(component).toBeDefined();
  });
  it('should contain "banner works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('banner works!');
  });
  it('should have <p> with "banner works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('p');
    expect(p.textContent).toEqual('banner works!');
  });
});
