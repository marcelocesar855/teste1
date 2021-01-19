import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import '../../styles/navbar.css'

class Header extends Component {

  state = {
    isOpen : false,
    prevScrollpos : window.pageYOffset
  }

 componentDidMount() {
  window.onscroll = () => this.handleScroll()
}

  handleScroll() {
  var currentScrollPos = window.pageYOffset;
  if(this.state.prevScrollpos < 200){
    document.getElementById("navbar").style.background = "transparent";
  }
  else if (this.state.prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.background = "#48D1CC";
  } else {
    document.getElementById("navbar").style.top = "-75px";
    document.getElementById("navbar").style.opacity = "#48D1CC";
  }
  this.setState({prevScrollpos : currentScrollPos});
}

  toggle = () => {
    this.setState({isOpen : !this.state.isOpen})
    document.getElementById("navbar").style.background = "#48D1CC";
}
  render () {
    return (
    <div  id='navbar' className='fixed-top seven-navbar'>
      <Navbar className="nav-text" expand="md">
        <NavbarBrand href="#home">Earth Oasis Network</NavbarBrand>
        <NavbarToggler onClick={this.toggle} >
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/clientes/">Das Netzwerk</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#sobre">Os livros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contato">Interviews</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#time">Sobre o autor</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#servicos">Contato</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )};
}

export default Header; 