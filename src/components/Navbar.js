import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks parentItem="nav-links" item="nav-link" />
        <SocialLink parentItem="nav-icons" />
      </div>
    </nav>
  );
}

export default Navbar;
