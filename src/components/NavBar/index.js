import React, { StrictMode } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
      <StrictMode>
      <Navbar expand='md' className='navbar justify-content-between'>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link className="nav-bar" to='/'>Home</Link>
              <Link className="nav-dash-bar" to='/flash-card'>Flash Cards</Link>
            </NavItem>
          </Nav>
          </Navbar>
    </StrictMode>
  );
}
