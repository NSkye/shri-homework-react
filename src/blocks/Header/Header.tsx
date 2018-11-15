import * as React from 'react';
import { cn } from '@bem-react/classname';
import NavButton from '@/blocks/NavButton';

const HeaderCn = cn('Header');

export interface HeaderProps {
  logoURL: string;
  items?: Array<{
    title: string,
    href?: string,
  }>;
}
 
export interface HeaderState {
  navIsOpen: boolean
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
  state = { navIsOpen: false  }

  toggleNav = () => {
    this.setState({
      ...this.state,
      navIsOpen: !this.state.navIsOpen
    });
  }

  render() { 
    return (
      <header className={HeaderCn()}>
        <div className={HeaderCn('logo')}
          role='banner'
          aria-label='Яндекс Дом'
          style={({ backgroundImage: `url(${this.props.logoURL})`})}
        />
        <nav role='navigation' className={HeaderCn('navigation', { open: this.state.navIsOpen })}>
          <ul className={HeaderCn('list')}>{
            this.props.items && this.props.items.map((i, ii) => {
              return <li key={ii} className={HeaderCn('item')}>
                <a className={HeaderCn('link')} href={i.href || '#'}>
                  {i.title}
                </a>
              </li>;
            })
          }</ul>
        </nav>
        <div onClick={this.toggleNav} className={HeaderCn('navButton')} role='button' aria-label='toggle-navigation'>
          <NavButton open={this.state.navIsOpen} />
        </div>
      </header>
    );
  }
}
 
export default Header;