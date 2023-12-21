import { pageLinks } from "../data";
function PageLinks({ parentItem, item }) {
  return (
    <ul className={parentItem} id="nav-links">
      {pageLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} className={item}>
            {" "}
            {link.text}{" "}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default PageLinks;
