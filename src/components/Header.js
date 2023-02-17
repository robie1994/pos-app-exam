import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';

const Header = () => {
	let dateToday = new Date().getMonth() + 1 + '-' + new Date().getDate() + '-' + new Date().getFullYear();

	return (
		<header className="App-header">
			<div className=''>
				<div className='date'>Date Today:  {dateToday}</div>
				<div className='nav'>
					<Navbar expand="lg">
						<Container>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="me-auto">
									<Nav.Link className="navlink" href="/">Create Transaction</Nav.Link>
									<Nav.Link className="navlink" href="/transaction-history">View Transactions</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</div>
			</div>
		</header>
	)
}

export default Header
