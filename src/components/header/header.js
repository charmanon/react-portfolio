import React, {Component} from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';


export default class Header extends Component {
	render(){
		return (
			<div className='header'>
				<Navbar inverse collapseOnSelect>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a href="#">My Portfolio</a>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav>
				        <NavItem eventKey={1} href="#">Link</NavItem>
				        <NavItem eventKey={2} href="#">Link</NavItem>
				      </Nav>
				      <Nav pullRight>
				        <NavItem eventKey={1} href="#">About Me</NavItem>
				        <NavItem eventKey={2} href="#">Project</NavItem>
				      </Nav>
				    </Navbar.Collapse>
				  </Navbar>
			</div>
		)
	}
}