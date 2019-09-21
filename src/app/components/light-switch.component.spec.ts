import { LightSwitchComponent } from './light-switch.component';

describe('Test component looking only at its class', () => {
  it(`#clicked() should toggle #isOn`, () => {
    const comp = new LightSwitchComponent();
    expect(comp.isOn).toBe(true, 'on at the beginning');
    comp.clicked();
    expect(comp.isOn).toBe(false, 'off after click');
    comp.clicked();
    expect(comp.isOn).toBe(true, 'off after second click');
  });

  it(`#clicked should set #message to "is off"`, () => {
    const comp = new LightSwitchComponent();
    expect(comp.message).toMatch(/is on/i, 'on at first');
    comp.clicked();
    expect(comp.message).toMatch(/is off/i, 'off after clicked');
  });
});
