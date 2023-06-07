import { NavLink } from "react-router-dom";
import { FaBookReader } from 'react-icons/fa'
import { MdAccountBox } from 'react-icons/md'

const StudentSidebar = () => {
    return (
        <nav>
              <>
                {/* Menu Links */}
                <NavLink
                  to='selected-class'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <FaBookReader className='w-5 h-5' />

                  <span className='mx-4 font-medium'>My Selected Classes</span>
                </NavLink>
                <NavLink
                  to='enrolled-class'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <MdAccountBox className='w-5 h-5' />

                  <span className='mx-4 font-medium'>My Enrolled Classes</span>
                </NavLink>
              </>
            </nav>
    );
};

export default StudentSidebar;