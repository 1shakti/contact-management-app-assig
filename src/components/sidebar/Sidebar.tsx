import { NavLink } from 'react-router-dom';
import { menuItems } from '../../constants/menuItems';


function Sidebar(){
  return (
    <div className="w-64 bg-white text-black font-bold h-[calc(100vh-4rem)]">
      <div className="p-4">
        <nav>
          {menuItems.map((item) => (
            <NavLink 
              to={item.path} 
              className="block p-2" 
              key={item.name}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
