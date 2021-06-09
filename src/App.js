import logo from './logo.svg';
import './App.css';
import Greet, { Greet2 } from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello, { Hello2 } from './Hello';
import Message from './Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import Eventbind from './Eventbind';
import ParentComponent from './Components/ParentComponent';
import UserGreetings from './Components/UserGreetings';
import NameList from './NameList';
import PersonList from './Components/PersonList';




function App() {
  return (
    <div className="App">
      {/* <Greet name = "My Name"/>
      <Greet2 name="My Name"/>
      <Welcome name = " My Name"/>
      <Hello name = "My Name" />
      <Hello2 name= "My Name" />
      <Message/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/> */}
      {/* <Eventbind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreetings/> */}
      <NameList/>
      <PersonList/>
      
    </div>
  );
}

export default App;
