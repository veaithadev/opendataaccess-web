import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { useMsalAuthentication } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import { useMsal, useAccount } from "@azure/msal-react";
import { useState, useEffect } from "react";
import Header from "./components/header/header";
import Container from "react-bootstrap/esm/Container";
import Footer from "./components/footer/footer";
import Loading from "./components/loading/loading";

function App() {
  useMsalAuthentication(InteractionType.Redirect);

  return (
    <>
      <AuthenticatedTemplate>
        <RootComponent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>You are not signed in! Please sign in.</p>
      </UnauthenticatedTemplate>
    </>
  );
}

export default App;

/**
 * Define RootComponent Component
 */
type RootComponentProps = {};

export function RootComponent(props: RootComponentProps) {
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (account && account.name) {
      setUsername(account?.username);
    } else {
      setUsername("");
    }
  }, [account]);

  return (
    <>
      <div>
        {/* <WellcomeName/>
            <ProfileContent/> */}
      </div>
      <div>
        <Header appName="Open Data Access" />
      </div>
      <Container>
         {/* <Loading  /> */}
        {/* <Routes>
            <Route path="/" element={<Home username={username} />} />
            <Route path="/new" element={<CreateNew />} />
            <Route path="/all" element={<AllMOCs />} />
            <Route path="/approval" element={<Approval />} />
            <Route path="/getuserinfo" element={<User />} />
            <Route path="/quickrefguide" element={<QuickRefGuide />} />
            <Route path="/metrics" element={<Metrics />} />
            <Route path="/workflow/emocs/:mocId" element={<Review />} />
            <Route path="/workflow/emocs/:mocId/approval" element={<Approval />} />
          </Routes> */}
      </Container>
      <div>
        <Footer/>
      </div>
    </>
  );
}
