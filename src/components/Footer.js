import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

function Footer() {
  return (
    <footer class="section footer">
      <PageLinks parentItem="footer-links" item="footer-link" />

      <SocialLink parentItem="footer-icons" />

      <p class="copyright">
        copyright &copy; Backroads travel tours company-
        <span id="date"> {new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
