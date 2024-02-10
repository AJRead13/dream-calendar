import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({ currentPage }) {
  const pages = ['calendar', 'contact', 'dreams', 'login', 'signup', 'profile', 'feed'];

  return (
    <nav>
      <ul className="flex-row">
        <li
          className={`mx-5 ${currentPage === '/' && 'navActive'}`}
          key="about"
        >
          <Link to="/">Home</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
