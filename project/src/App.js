//import logo from './logo.svg';
import './Apple.css';
import Demo from './Demo';
import Clickevents from './Events/Clickevents';
import Eventlistener from './Events/Eventlistener';
import Apple from './NestedComponents/Apple';
import Destructprops from './Props/Destructprops';
import Firstcomp from './Props/Firstcomp';
import Fourthcomp from './Props/Fourthcomp';
import Secondcomp from './Props/Secondcomp';
import Thirdcomp from './Props/Thirdcomp';
import Usestate from './UsestateHook/Usestate';

let a = "Headset";
const s={
  name:"NArenDra",
  value:"789"

}

const phone={
  model:"iphone",
  year: "2012",
  ram: "64gb"
}

function App() {
  return (
    <div>
      <Eventlistener/>
      <Clickevents/>
      <h2><Usestate/></h2>
      <Firstcomp k={s.name}/>
      <Secondcomp/>
      <Thirdcomp name="Jagan"/>
      <Fourthcomp/>
      <Destructprops ph={phone}/>
      <Demo />
      <Apple />
      
      <h3 classname="class1">the price {a} is $44.99 </h3>
    <img className="jagan" src="https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg" /> 
    </div>
  );
}

export default App;
