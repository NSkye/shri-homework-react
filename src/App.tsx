import logo from '@/assets/logo.svg';
import Header from '@/blocks/Header';
import Footer from '@/blocks/Footer';
import * as React from 'react';
import config from '@/app.config.json';
import { cn } from '@bem-react/classname';

const AppCn = cn('App');

class App extends React.Component {
  public render() {
    return (
      <div className={AppCn()}>
        <Header logoURL={logo} items={config.navigation} />
        <main className={AppCn('main')}></main>
        <Footer items={config.footer.items} copyright={config.footer.copyright} />
      </div>
    );
  }
}

export default App;
