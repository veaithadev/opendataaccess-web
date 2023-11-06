import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import { useMsal, useAccount } from "@azure/msal-react";

/* eslint-disable-next-line */
export interface HeaderProps {
  appName:string
}

/* eslint-disable-next-line */
export interface WellcomeNameProps {}

export function Header(props: HeaderProps) {
  return (
    <Navbar bg="primary" variant='dark' sticky='top' fixed='top' expand="lg">
      <Container>
        <Navbar.Brand href="/">{props.appName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='http://goto/wecsupport' target="_blank">Feedback</Nav.Link>
          </Nav>
          <WellcomeName />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

   
}



export function WellcomeName(props: WellcomeNameProps) {
  //
  // const { accounts, inProgress, instance } = useMsal();
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [name, setName] = useState("");


  useEffect(() => {
      if (account && account.name) {
          setName(account.name.split(" ")[0]);
      } else {
          setName("");
      }
  }, [account]);
  
  if (name) {
    return (
        <div className='user'>Welcome {account?.username}!</div>
    );
  } else {
    return (
        <div className='user'>Welcome to ......!</div>
    );
  }
}


export default Header;
