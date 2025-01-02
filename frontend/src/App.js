import Header from './components/Header';
import Main from './components/Main';
import BgMobile from './images/background-mobile.png';
import BgTablet from './images/background-tablet.png';
import BgDesktop from './images/background-desktop.png';

function App() {
  return (
    <>
      {/* Backgrounds */}
      <img
        src={BgMobile}
        className="block sm:hidden -z-30 absolute top-0 left-0 bottom-0 min-h-[120vh] w-screen"
        alt="background"
      />
      <img
        src={BgTablet}
        className="hidden sm:block lg:hidden -z-20 absolute top-0 left-0 bottom-0 min-h-[120vh] w-screen"
        alt="background"
      />
      <img
        src={BgDesktop}
        className="hidden lg:block -z-10 absolute top-0 left-0 bottom-0 min-h-[120vh] w-screen"
        alt="background"
      />
      {/* App */}
      <Header />
      <Main />
    </>
  );
}

export default App;
