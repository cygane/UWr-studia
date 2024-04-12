import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import RadioGroupDemo from '../RadioGroup/RadioGroup';
import SelectDemo from '../Select/Select';
import './styles.css';
import SliderDemo from '../Slider/Slider';
import SwitchDemo from '../Switch/Switch';
import AvatarDemo from '../Avatar/Avatar';
import CheckboxDemo from '../Checkbox/Checkbox';

const Form: React.FC = ()  => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Account
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Password
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab3">
        Preferences
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <p className="Text">Make changes to your account here. Click save when you're done.</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="avatar">
        </label>
        <AvatarDemo id="avatar"/>
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Name
        </label>
        <input className="Input" id="name" defaultValue="Pedro Duarte" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Username
        </label>
        <input className="Input" id="username" defaultValue="@peduarte" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="gender">
          Gender
        </label>
        <RadioGroupDemo />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Save changes</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2">
      <p className="Text">Change your password here. After saving, you'll be logged out.</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="currentPassword">
          Current password
        </label>
        <input className="Input" id="currentPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="newPassword">
          New password
        </label>
        <input className="Input" id="newPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="confirmPassword">
          Confirm password
        </label>
        <input className="Input" id="confirmPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <CheckboxDemo/>
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Change password</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab3">
      <p className="Text">Change preferences here. Click save when you're done.</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="notificationSettings">
          Notification Settings
        </label>
        <SelectDemo id="notificationSettings"/>
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="notificationFrequency">
          Notification Frequency
        </label>
        <SliderDemo id="notificationFrequency"/>
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="collectAdditionalData">
        Collect Additional Data
        </label>
        <SwitchDemo/>
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Save preferences</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

export default Form;