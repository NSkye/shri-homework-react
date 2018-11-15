import { cn } from '@bem-react/classname';
import * as React from 'react';
import NavButton from '@/blocks/NavButton';

const HeaderCn = cn('Header');

export interface HeaderProps {
  logoURL: string;
  items?: Array<{
    title: string,
    href?: string,
  }>;
}

const Header: React.SFC<HeaderProps> = (props) => {
  return (
    <header className={HeaderCn()}>
      <div className={HeaderCn('logo')}
        role='banner'
        aria-label='Яндекс Дом'
        style={({ backgroundImage: `url(${props.logoURL})`})}
      />
      <nav role='navigation' className={HeaderCn('navigation', { open: false })}>
        <ul className={HeaderCn('list')}>{
          props.items && props.items.map((i, ii) => {
            return <li key={ii} className={HeaderCn('item')}>
              <a className={HeaderCn('link')} href={i.href || '#'}>
                {i.title}
              </a>
            </li>;
          })
        }</ul>
      </nav>
      <div className={HeaderCn('navButton')} role='button' aria-label='toggle-navigation'>
        <NavButton open={false} />
      </div>
    </header>
  );
};

export default Header;
