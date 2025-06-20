// import React, { useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCircleXmark,
//   faEye,
//   faUsersViewfinder,
//   faBullseye,
//   faHeart,
// } from '@fortawesome/free-solid-svg-icons';
// import { Link, useLocation } from 'react-router-dom';

// function Sidebar({ isOpen, onClose }) {
//   const sidebarRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         onClose(); // Close sidebar if clicked outside
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [onClose]);

//   return (
//     <div className="sidebar-overlay">
//       <div className={`sidebar ${isOpen ? 'open' : 'closed'}`} ref={sidebarRef}>
//         <FontAwesomeIcon
//           className="exit-btn"
//           icon={faCircleXmark}
//           onClick={onClose} // Close on X click
//         />

//         <ul className="sidebar-list">
//           <li className="sidebar-links">
//             <FontAwesomeIcon className="sidebar-link-icons" icon={faHeart} />
//             Favourite Hymn
//           </li>
//           <Link to="/mission" className="sidebar-links">
//             <FontAwesomeIcon className="sidebar-link-icons" icon={faEye} />
//             Mission/Vision
//           </Link>
//           <Link to="/about" className="sidebar-links">
//             <FontAwesomeIcon
//               className="sidebar-link-icons"
//               icon={faUsersViewfinder}
//             />
//             About
//           </Link>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faEye,
  faUsersViewfinder,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, onClose }) {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`} ref={sidebarRef}>
        <FontAwesomeIcon
          className="exit-btn"
          icon={faCircleXmark}
          onClick={onClose}
        />

        <ul className="sidebar-list">
          <Link to="/favorite" className="sidebar-links" onClick={onClose}>
            <FontAwesomeIcon className="sidebar-link-icons" icon={faHeart} />
            Favourite Hymn
          </Link>
          <Link to="/mission" className="sidebar-links" onClick={onClose}>
            <FontAwesomeIcon className="sidebar-link-icons" icon={faEye} />
            Mission/Vision
          </Link>
          <Link to="/about" className="sidebar-links" onClick={onClose}>
            <FontAwesomeIcon
              className="sidebar-link-icons"
              icon={faUsersViewfinder}
            />
            About
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
