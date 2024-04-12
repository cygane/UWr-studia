import React, { forwardRef } from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './styles.css';

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof Select.Item> {
  children: string;
  className: string;
  value: string;
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(({ children, className, value, ...props }, forwardedRef) => {
  return (
    <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef} value={value}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

const SelectDemo: React.FC  = () => (
  <Select.Root>
    <Select.Trigger className="SelectTrigger" aria-label="Food">
      <Select.Value placeholder="All" />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="SelectViewport">
          <Select.Group>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="onlyFollowed">Only Followed</SelectItem>
            <SelectItem value="none">None</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

// interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof Select.Item> {
//   value: string;
// }

// const SelectItem = forwardRef<HTMLLIElement, SelectItemProps>(({ children, className, ...props }, forwardedRef) => {
//   return (
//     <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
//       <Select.ItemText>{children}</Select.ItemText>
//       <Select.ItemIndicator className="SelectItemIndicator">
//         <CheckIcon />
//       </Select.ItemIndicator>
//     </Select.Item>
//   );
// });


// const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
//   return (
//     <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
//       <Select.ItemText>{children}</Select.ItemText>
//       <Select.ItemIndicator className="SelectItemIndicator">
//         <CheckIcon />
//       </Select.ItemIndicator>
//     </Select.Item>
//   );
// });

export default SelectDemo;