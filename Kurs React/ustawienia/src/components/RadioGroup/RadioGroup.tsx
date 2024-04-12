import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import './styles.css';

const RadioGroupDemo: React.FC = () => (
  <form>
    <RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item className="RadioGroupItem" value="male" id="r1">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r1">
          Male
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item className="RadioGroupItem" value="female" id="r2">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r2">
          Female
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item className="RadioGroupItem" value="other" id="r3">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r3">
          Other
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);

export default RadioGroupDemo;