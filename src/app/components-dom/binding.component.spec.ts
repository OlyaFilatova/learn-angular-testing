import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BindingComponent } from './binding.component';

describe('Test component binding', () => {
	let component: BindingComponent;
	let fixture: ComponentFixture<BindingComponent>
	let h1: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ BindingComponent ]
		});

		fixture = TestBed.createComponent(BindingComponent);
		component = fixture.componentInstance;
		h1 = fixture.nativeElement.querySelector('h1');
	});

	it('should not display title in the DOM after createComponent()', () => {
		expect(h1.textContent).toEqual('');
	});

	it('should display original title aflter detectChanges()', () => {
		fixture.detectChanges();
		expect(h1.textContent).toEqual(component.title);
	});

	it('should display a different test title', () => {
		component.title = 'New title';
		fixture.detectChanges();
		expect(h1.textContent).toEqual('New title');
	});

});
