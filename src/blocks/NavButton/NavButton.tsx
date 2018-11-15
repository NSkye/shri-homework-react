import { cn } from '@bem-react/classname';
import * as React from 'react';

const NavButtonCn = cn('NavButton');

export interface NavButtonProps {
  open: boolean;
}

const NavButton: React.SFC<NavButtonProps> = (props) => {
  return (
    <div className={NavButtonCn({ open: props.open })}>
      <div className={NavButtonCn('element')} />
    </div>
  );
};

export default NavButton;
