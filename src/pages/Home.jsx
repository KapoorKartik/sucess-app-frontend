// import React from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Offcanvas from "react-bootstrap/Offcanvas";

// export const Home = () => {
//   return (
//     <>
//       <Navbar key={false} expand={false} className="bg-body-tertiary mb-3">
//         <Container fluid>
//           <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
//           <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
//           <Navbar.Offcanvas
//             id={`offcanvasNavbar-expand-${false}`}
//             aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
//             placement="start"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
//                 Offcanvas
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3">
//                 <Nav.Link href="#action1">Home</Nav.Link>
//                 <Nav.Link href="#action2">Link</Nav.Link>
//                 <NavDropdown
//                   title="Dropdown"
//                   id={`offcanvasNavbarDropdown-expand-${false}`}
//                 >
//                   <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                   <NavDropdown.Item href="#action4">
//                     Another action
//                   </NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item href="#action5">
//                     Something else here
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//       <Form className="d-flex mx-2">
//         <Form.Control
//           type="search"
//           placeholder="Search"
//           className="me-2"
//           aria-label="Search"
//         />
//         <Button variant="outline-success">Search</Button>
//       </Form>
//     </>
//   );
// };

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";

export const Home = () => {
  let imageUrl = "https://placehold.co/500x400";
  // let imageUrl = "https://plchldr.co/i/336x180?bg=71BA51";
  let imageAlt = "alt tag";
  let link = "/listing";

  const [imageArr, setImageArr] = useState([]);
  const getCarouselImage = () => {
    let dummyApiRes = [
      {
        imageUrl,
        imageAlt,
        link,
      },
      {
        imageUrl,
        imageAlt,
        link,
      },
      {
        imageUrl,
        imageAlt,
        link,
      },
      {
        imageUrl,
        imageAlt,
        link,
      },
      {
        imageUrl,
        imageAlt,
        link,
      },
    ];
    setImageArr(dummyApiRes);
  };

  useEffect(getCarouselImage, []);
  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" variant="light"> */}
      <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle
            className="border-0  p-1 text-light"
            style={{ border: "none" }}
            aria-controls="responsive-navbar-nav"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </Navbar.Toggle>
          <Navbar.Brand href="#home" className="text-light">
            Sucess App
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="text-light">
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-light">
                Pricing
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Form className="d-flex m-2 border border-danger rounded">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 mt-1 border border-danger border-0 no-box-shadow"
          aria-label="Search"
/>
        
        <div className=" border-danger  d-flex align-items-center justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></div>
      </Form>
      <div className="m-2 p-3 border border-1 border-danger">
        container for offers
      </div>
      <Carousel
        className="shadow mx-2 rounded"
        controls={false}
        indicators={false}
      >
        {imageArr?.map((ele, i) => {
          return (
            <Carousel.Item>
              <Link to={ele.link}>
                <Image src={ele.imageUrl} alt={ele.imageAlt} fluid />
                <Carousel.Caption className="text-dark">
                  {i + 1} image
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="fs-5 m-2 p-1 mb-0">Shortcut</div>
      <div className="d-flex justify-content-around">
        <div className="shadow p-3">S1</div>
        <div className="shadow p-3">S2</div>
        <div className="shadow p-3">S3</div>
      </div>
      <div className="position-absolute end-0 bottom-0 border border-2 border-danger bottom-container">
        icon
      </div>
    </>
  );
};
