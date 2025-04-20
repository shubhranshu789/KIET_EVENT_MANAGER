import {BrowserRouter , Routes , Route} from 'react-router-dom'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Home from './Components/Home/Home';

import SignIn from './Components/Auth/SignIn';
import SignUp2 from './Components/Auth/SignUp2';

import ViewParticular from './Components/Handle/ViewParticulr'
import Register from './Components/Handle/Register';
import RegisterParticipants from './Components/Handle/RegisterParticipants';

import Profile from './Components/Profile/Profile';



import Footer from './Components/Footer/Footer';



import OtherEvents from './Components/Events/OtherEvents';
import EventsSection from './Components/Events/EventsSection';
import Debate from './Components/Events/Debate';

import RegisterForDebate from './Components/Handle/RegisterForDebate';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp2/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/viewparticular/:eventid' element={<ViewParticular/>}></Route>
        <Route path='/register/:eventid' element={<Register/>}></Route>
        <Route path='/registerparticipants/:eventid/:members' element={<RegisterParticipants/>}></Route>




        <Route path='/eventsection' element={<EventsSection/>}></Route>
        <Route path='/otherevents' element={<OtherEvents/>}></Route>
        <Route path='/debate' element={<Debate/>}></Route>



        <Route path='/registerfordebate/:eventid/:members' element={<RegisterForDebate/>}></Route>
      </Routes>
      <ToastContainer theme="dark" />
      <Footer/>
    </div>
  );
}

export default App;
