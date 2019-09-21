import { WithInputComponent } from './with-input.component';

describe('Test component with input value and an event emitter', () => {
  it('raises the changed event when clicked', () => {
    const comp = new WithInputComponent();
    const test_val: { value: string } = { value: 'Test' };
    comp.inp = test_val;

    comp.changed.subscribe(
      (changedValue: { value: string }) =>
        expect(changedValue).toBe(test_val)
      );
    comp.click();
  });
});
