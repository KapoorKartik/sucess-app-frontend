import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function FormExample() {
  return (
    <Navbar fixed="bottom" bg="light" data-bs-theme="light">
      <Container style={{ border: "0px solid red" }}>
        <Navbar.Brand href="#home">
          <Button variant="primary">Home</Button>
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <Button variant="warning">Brand</Button>
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <Button variant="info">Courses</Button>
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <Button variant="success">Practice</Button>
        </Navbar.Brand>
       
      </Container>
    </Navbar>
  );
}

export default FormExample;
