import { cn } from '@bem-react/classname';
import * as React from 'react';

const FooterCn = cn('Footer');

export interface FooterProps {
  items?: Array<{
    title: string,
    href?: string,
  }>;
  copyright?: string;
}

const Footer: React.SFC<FooterProps> = (props) => {
  return (
    <footer className={FooterCn()}>
      {
        props.items && props.items.map((i, ii) => (
          <span key={ii} className={FooterCn('item')}>
            <a href={i.href} className={FooterCn('link')}>{ i.title }</a>
          </span>
        ))
      }
      <span className={FooterCn('copyright')}>{ props.copyright }</span>
    </footer>
  );
};

export default Footer;
