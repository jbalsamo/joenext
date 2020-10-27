import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function MyNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Joe's Site</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/projects/quip.js">Quip</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/sbries.js">SBRIES</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/bots.js">Covid Bots</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/misc">Miscellaneous</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                    <Nav.Link href="/misc">Miscellaneous</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}