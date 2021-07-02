/* eslint-disable jsx-a11y/alt-text */
import NowDisplay from '../NowDisplay/NowDisplay';
import LastCrash from '../LastCrash/LastCrash';
import Difference from '../Difference/Difference';

import './Header.css';

import tracker300 from '../../img/tracker-300.png';

function Header() {
  return (
    <header className="App-header">
      <img src={tracker300} />

      <NowDisplay />
      <LastCrash />
      <Difference />

      <div className="box blue">
        <p>Hello</p>
      </div>
      <div className="box fancy blue">
        <p>World</p>
      </div>
    </header>
  );
}

export default Header;
