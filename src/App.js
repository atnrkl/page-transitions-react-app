import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

//Global Styles
import { GlobalStyles } from "./styles/GlobalStyles";

//import pages
import { About, Contact, Home } from "./pages";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
