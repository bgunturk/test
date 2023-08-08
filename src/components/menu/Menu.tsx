import './menu.scss';
import {Link} from "react-router-dom";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className='menu'>
      {menu.map((item) => (
      <Link to={item.url}  className='item' key={item.id}>
        <span className='title'>{item.title}</span>
        <img src={item.icon} alt="" />
        
      </Link>
      ))}
    </div>
  )
}

export default Menu

/*

      <div className='item'>
        <span className='title'>Main</span>
        <Link to="/" className="listItem">
          <img src="/profile.svg" alt="" />
          <span className="listItemTitle">Main1</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/home.svg" alt="" />
          <span className="listItemTitle">Main2</span>
        </Link>
      </div>
      <div className='item'>
        <span className='title'>Main</span>
        <Link to="/" className="listItem">
          <img src="/profile.svg" alt="" />
          <span className="listItemTitle">User1</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/home.svg" alt="" />
          <span className="listItemTitle">User2</span>
        </Link>
      </div>
*/