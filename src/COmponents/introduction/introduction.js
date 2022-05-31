import React from 'react'
import './introduction.css'
import {Navbar,Nav,Container,} from 'react-bootstrap'
export const Introduction = () => {
    return (
        <div>
            <div className='introduction'>
            <Navbarr/>
            </div>

            <div className='introduction_text'>
            
             <div className='logoname'>
                    <p>
                        2SCL
                    </p>
                </div>
                <div className='logoensias'>
                    <img src='/LOGOENSIAS.jpg' alt='logo' height='70px' />
                </div>
                <p className='filierename'>Smart Supply Chain and Logistique
                </p>
            </div> 
        </div>

    )
}



const Navbarr = () => {
  return (
      <div>
          <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    {/* <div class="container">
    <a href="#" class="navbar-brand">Frontend Bootcamp</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navmenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a href="#learn" class="nav-link">What You'll Learn</a>
        </li>
        <li class="nav-item">
          <a href="#questions" class="nav-link">Questions</a>
        </li>
        <li class="nav-item">
          <a href="#instructors" class="nav-link">Instructors</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="container">
    <a href="#" class="navbar-brand">Frontend Bootcamp</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navmenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a href="#learn" class="nav-link">What You'll Learn</a>
        </li>
        <li class="nav-item">
          <a href="#questions" class="nav-link">Questions</a>
        </li>
        <li class="nav-item">
          <a href="#instructors" class="nav-link">Instructors</a>
        </li>
      </ul>
    </div>
  </div> */}
  </div>
  )
}
