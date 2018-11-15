import * as React from 'react';
import { cn } from '@bem-react/classname';

const NavButtonCn = cn('NavButton')

export interface NavButtonProps {
  open: boolean
}
 
const NavButton: React.SFC<NavButtonProps> = props => {
  return (
    <div className={NavButtonCn({ open: props.open })}>
      <div className={NavButtonCn('element')} />
    </div>
  );
}
 
export default NavButton;