import config from '@/app.config.json';
import logo from '@/assets/logo.svg';
import Footer from '@/blocks/Footer';
import Header from '@/blocks/Header';
import { cn } from '@bem-react/classname';
import * as React from 'react';

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
