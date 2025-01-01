import Logo from './../images/logo-full.svg';

const Header = () => {
  return (
    <header className="flex justify-center">
      <img src={Logo} alt="Coding Conf" />
    </header>
  );
};

export default Header;
