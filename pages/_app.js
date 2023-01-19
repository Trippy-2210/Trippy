import '../styles/globalStyles.css';
import '../styles/messages.css';

export default function App({ Component, pageProps }) {
  return (
    <div className='mainContainer v'>
      <Component {...pageProps} />
    </div>
  );
}
