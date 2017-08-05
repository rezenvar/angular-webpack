import { NoContentComponent } from './no-content.component';



describe('check is unit test setup works', () => {
	let component : NoContentComponent;
	beforeEach(() => {
		component = new NoContentComponent();
	});

	it('should create component instance', () => {
		let isInstance = component instanceof NoContentComponent;
		expect(isInstance).toBe(true);
	});

	it('message to be equal to "No content found" ', () => {
		expect(component.message).toBe('No content found');
	});

});