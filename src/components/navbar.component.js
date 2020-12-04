import Navbar from "react-bootstrap/Navbar";
import giticon from "../assets/github.png";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" variant="light">
      <img
        alt="github-logo"
        src={giticon}
        width="32"
        height="32"
        className="d-inline-block align-top"
      />
      <Navbar.Brand className="px-2" href="/">
        Git Profile Finder
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarComponent;
