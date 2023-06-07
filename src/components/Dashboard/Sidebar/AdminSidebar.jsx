import { NavLink } from "react-router-dom";
import { MdOutlineManageSearch, MdManageAccounts } from 'react-icons/md'

const AdminSidebar = () => {
    return (
        <nav>
              <>
                {/* Menu Links */}
                <NavLink
                  to='manage-class'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <MdOutlineManageSearch className='w-5 h-5' />

                  <span className='mx-4 font-medium'>Manage Classes</span>
                </NavLink>
                <NavLink
                  to='manage-users'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <MdManageAccounts className='w-5 h-5' />

                  <span className='mx-4 font-medium'>Manage Users</span>
                </NavLink>
              </>
            </nav>
    );
};

export default AdminSidebar;