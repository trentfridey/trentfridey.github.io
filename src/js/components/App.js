import React from "react";
import Subjects from './Subjects';
import Contact from './Contact';
import Landing from './Landing';


const App = () => (
  <>
    <section id={'landing'}>
      <Landing />
    </section>
    <section id={'subjects'} className={"cards"}>
      <Subjects/>
    </section>
    <section id={'contact'}>
      <Contact/>
    </section>
  </>
)

export default App;
