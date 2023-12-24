import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
// import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
const [navbarOpen, setNavBarOpen] = useState(false);
  return (
    // <Navbar
    //   expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
    //   <Container>
    //     <Navbar.Brand href="/" className="d-flex" style={{margintop: "10px"}}>
    //       <img src={logo} className="img-fluid logo desktop-icon" alt="brand" />

    //     </Navbar.Brand>
    //     <Navbar.Toggle
    //       aria-controls="responsive-navbar-nav"
    //       onClick={() => {
    //         updateExpanded(expand ? false : "expanded");
    //       }}
    //     >
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="responsive-navbar-nav" >
    //       <Nav className="ms-auto" defaultActiveKey="#home" style={{ flexbasis: "10% !important" }}>
    //         <Nav.Item>
    //           <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
    //             <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
    //           </Nav.Link>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/about"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <AiOutlineUser style={{ marginBottom: "2px" }} /> About-Me
    //           </Nav.Link>
    //         </Nav.Item>


    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/project"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <AiOutlineFundProjectionScreen
    //               style={{ marginBottom: "2px" }}
    //             />{" "}
    //             My Projects
    //           </Nav.Link>
    //         </Nav.Item>

    //         <Nav.Item>
    //           <Nav.Link
    //             as={Link}
    //             to="/resume"
    //             onClick={() => updateExpanded(false)}
    //           >
    //             <CgFileDocument style={{ marginBottom: "2px" }} /> My Resume
    //           </Nav.Link>
    //         </Nav.Item>



    //         <Nav.Item className="fork-btn">
    //           <Button
    //             href="https://github.com/Favourlisticc"
    //             target="_blank"
    //             className="fork-btn-inner"
    //           >
    //             <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
    //             <AiFillStar style={{ fontSize: "1.1em" }} />
    //           </Button>
    //         </Nav.Item>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <div className=" bg-white w-full">
       <div className="flex flex-wrap items-center justify-between py-2 ">
      <div className="container w-full mx-auto px-4 flex flex-wrap items-center justify-between">
         <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="/" className="">
              <img  className="w-10 h-10" src="/assets/logo.png" alt="logo"/>
            </a>
            <button
              className="text-[#00050F] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden  outline-none focus:outline-none"
              type="button"
              onClick={() => setNavBarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <AiOutlineClose size={25} />
              ) : (
                <HiBars3 size={25} />
              )}
            </button>
        </div>
        <div
          className={"lg:flex flex-grow items-center justify-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="flex flex-col items-center justify-center lg:flex-row list-none lg:ml-auto">
            <a href="/" className="font-medium">Explore</a>
            <a href="/" className="ml-10 font-medium">Link 2  </a>
            <a href="/" className="ml-10 font-medium">Contact Us</a>

            <div className="flex flex-initial  ml-60">
            <button className="border border-[#04A38A] rounded-md mr-1 py-3 text-[#04A38A] px-5 font-medium">Login</button>
            <button className="bg-teal-600 border-2 border-teal-600 rounded-md min-w-max ml-5 p-3 px-5 font-medium text-white text-base">Start a Campaign</button>
          </div>
          </div>
        </div>
      </div>
     

      
    </div>
    </div>
   
  );
}

export default NavBar;
