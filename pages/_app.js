import './styles/style.css';
import './styles/messages.css';

import NavBar from './navbar.js';

export default function App({ Component, pageProps }) {
  return (
    <div className='mainContainer v'>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
