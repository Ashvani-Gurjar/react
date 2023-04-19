import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./About";
import Contact from "./Contact";
import NoPage from "./Nopage";

const  App = ()  => {
  return (
   
      <Routes>
        <Route path="/" element={<Layout  />}>
          <Route index element={<Home name="Home" />} />
          <Route path="contact" element={<Contact  name="Contact"/>} />
          <Route path="*" element={<NoPage name="AshvaniCome" />} />
        </Route>
      </Routes>
    
  );
}

export default App;