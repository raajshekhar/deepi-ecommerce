import '../styles/globals.css';
import withReduxStore from '../src/utils/with-redux-store';
import Header from '../src/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default withReduxStore.withRedux(MyApp);
