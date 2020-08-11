import React from 'react';
import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
// import Banner from './banner.jpg';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <div>
      {/* <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A> */}
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/activeMatchup">
          <FormattedMessage {...messages.activeMatchup} />
        </HeaderLink>
        <HeaderLink to="/setMatchup">
          <FormattedMessage {...messages.setMatchup} />
        </HeaderLink>
        <HeaderLink to="/resolveMatchup">
          <FormattedMessage {...messages.resolveMatchup} />
        </HeaderLink>
        <HeaderLink to="/leaderboard">
          <FormattedMessage {...messages.leaderboard} />
        </HeaderLink>
        <HeaderLink to="/history">
          <FormattedMessage {...messages.history} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
