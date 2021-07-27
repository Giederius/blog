import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Footer from "./components/Footer";
import Contact from "./components/pages/contact.jsx";
import About from "./components/pages/about";
import Faq from "./components/pages/faq";
import BlogpostPage from "./components/pages/Blogpost-page";
import Register from "./components/pages/register";
import Login from "./components/pages/login";
import NewPost from "./components/pages/newPost";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/blog/:id" component={BlogpostPage} />
          <Route path="/newpost" component={NewPost} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
