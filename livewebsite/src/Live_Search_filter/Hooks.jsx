
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./About";
import Contact from "./Contact";
import NoPage from "./Nopage";
import User from "./user";
import Search from "./Search";
const  App = ()  => {
  return (
   
      <Routes>
        <Route path="/" element={<Layout  />}>
          <Route index element={<Home name="Home" />} />
          <Route path="user/:fname/:lname" element={<User  name="User"/>} />
          <Route path="search" element={<Search  name="Search"/>} />
          <Route path="contact" element={<Contact  name="Contact"/>} />
          <Route path="*" element={<NoPage name="AshvaniCome" />} />
      
        </Route>
      </Routes>
    
  );
}

export default App;