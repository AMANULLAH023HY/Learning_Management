// import { FiMenu } from "react-icons/fi";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import Footer from "../Components/Footer";

// function HomeLayout({ children }) {
//   function changeWidth() {
//     const drawerSide = document.getElementsByClassName("drawer-side");
//     drawerSide[0].style.width = "auto";

//     console.log("hello");
//   }

//   function hideDrawer() {
//     const element = document.getElementsByClassName("drawer-toggle");
//     element[0].checked = false;
//     const drawerSide = document.getElementsByClassName("drawer-side");
//     drawerSide[0].style.width = "0";
//   }

//   return (
//     <>
//       <div className="min-h-[90vh] ">
//         <div className="drawer absolute left-0 z-50 w-fit">
//           <input id=" my-drawer" className="drawer-toggle " type="checkbox" />

//           <div className="drawer-content">
//             <label htmlFor="my-drawer" className="cursor-pointer relative">
//               <button onClick={changeWidth} >
//               <FiMenu

//                 size={"32px"}
//                 className="font-bold text-white m-4"
//               /></button>
//             </label>
//           </div>

//           <div className="drawer-side    w-0">
//             <label htmlFor="my-drawer" className="drawer-overlay"></label>
//             <ul className="menu p-4 w-48 sm:w-80 bg-base-100 texte-base-content relative">
//               <li className="w-fit absolute right-2 z-50">
//                 <button onClick={hideDrawer}>
//                   <AiFillCloseCircle size={24} />
//                 </button>
//               </li>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/courses">All Courses</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact Us</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {children}
//         <Footer />
//       </div>
//     </>
//   );
// }
// export default HomeLayout;

// import { useState } from "react";
import { FiMenu } from "react-icons/fi";
// import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import Footer from "../Components/Footer";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // for chaecking yser is logged in 

  const isLoggedIn = useSelector((state)=> state?.auth?.isLoggedIn);

  // for displaying the options acc to role 
  const role = useSelector((state)=> state?.auth?.role);



  function hnadleLogout (e){
    e.preventDefault();

    // const res = await dispatch(logout());

    navigate('/');

  }


  return (
    <>
      <div className="min-h-[90vh] relative">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className=" drawer-button">
              <FiMenu size={32} className="font-bold text-white m-4" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}

              <li>
                <Link to="/">Home</Link>
              </li>

              {isLoggedIn && role === 'ADMIN' &&(
                  <li>
                    <Link to="/admin/dashboard">Admin DashBoard</Link>
                  </li>
              )}



              <li>
                <Link to="/courses">All Courses</Link>
              </li>{" "}
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>

              {!isLoggedIn &&(
                <li className="w-[90%]">                <div className="w-full flex items-center justify-center">
                  <button className=" bg-blue-700 px-4 py-1 font-semibold rounded-md w-full ">
                    <Link to="/login"> Login</Link>
                  </button>

                  <button className=" bg-purple-800 px-4 py-1 font-semibold rounded-md w-full ">
                    <Link to="/login"> Signup</Link>
                  </button>
                </div>
                </li>


              )}


              {isLoggedIn &&(
                <li className="absolute bottom-4 w-[90%]">                <div className="w-full flex items-center justify-center">
                  <button className=" bg-blue-700 px-4 py-1 font-semibold rounded-md w-full ">
                    <Link to="/user/profile"> Profile</Link>
                  </button>

                  <button className=" bg-purple-800 px-4 py-1 font-semibold rounded-md w-full ">
                    <Link onClick={hnadleLogout}>Logout</Link>
                  </button>
                </div>
                </li>


              )}
            </ul>
          </div>
        </div>

        {children}
        <Footer />
      </div>
    </>
  );
}

export default HomeLayout;
