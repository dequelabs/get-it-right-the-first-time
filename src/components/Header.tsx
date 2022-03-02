import { useState } from 'preact/hooks';
import { createPortal } from 'preact/compat';
import Menu from './Menu';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav>
      <h1>
        <a href="/">Pizza Air</a>
      </h1>
      <ul>
        <li>
          <a href="/order">Start Your Order</a>
        </li>
        <li>
          <button onClick={() => setShowMenu(true)}>Menu</button>
        </li>
        <li>
          <a href="/specials">Specials</a>
        </li>
      </ul>
      {showMenu &&
        createPortal(
          <Menu onClose={() => setShowMenu(false)} />,
          document.body
        )}
    </nav>
  );
};

export default Header;
