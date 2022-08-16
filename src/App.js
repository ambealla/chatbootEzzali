
import "./App.scss"

import ChatBot from './COmponents/chat/chat';
import Contact from './COmponents/Contact';
import Debouchement from "./COmponents/deboucher/debouche";
import { Galery } from './COmponents/introduction/galery';
import { Introduction } from './COmponents/introduction/introduction';
import Temoinage from "./COmponents/temoignage/temoinage";

function App() {
  return (
    <div className="root">
      <Introduction/>
      <Debouchement/>
      
      
      
      
      <Galery/>
      <Temoinage/>
      <Contact/>
      <ChatBot/>
      </div>
  );
}

export default App;



