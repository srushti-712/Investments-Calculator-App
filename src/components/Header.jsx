import logo from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo showing a basic money bag" />
      <h1>Investments Calculator</h1>
    </header>
  );
}

export default Header;
