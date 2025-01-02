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
        aria-label="mobile background"
        className="block sm:hidden -z-30 absolute top-0 left-0 bottom-0 min-h-[2200dvh] w-screen"
        alt="background mobile"
      />
      <img
        src={BgTablet}
        aria-label="tablet background"
        className="hidden sm:block lg:hidden -z-20 absolute top-0 left-0 bottom-0 min-h-[2200dvh] w-screen"
        alt="background tablet"
      />
      <img
        src={BgDesktop}
        aria-label="desktop background"
        className="hidden lg:block -z-10 absolute top-0 left-0 w-full min-h-[2200dvh] object-cover"
        alt="background desktop"
      />
      {/* App */}
      <Header />
      <Main />
    </>
  );
}

export default App;
