import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import './styles.css';

const AvatarDemo: React.FC = () => (
  <div style={{ display: 'flex', justifyContent:'center'}}>
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
    </Avatar.Root>
  </div>
);

export default AvatarDemo;