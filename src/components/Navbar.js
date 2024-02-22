import { Container, Nav, Navbar } from "react-bootstrap";

function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">COACHES CORNER</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Coaches Background</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;

//https://react-bootstrap.netlify.app/docs/components/navbar/
