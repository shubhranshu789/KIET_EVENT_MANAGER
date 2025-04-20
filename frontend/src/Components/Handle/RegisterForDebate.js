import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Navbar from '../Navbar/Navbar';
function RegisterForDebate() {

  const navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem("user"));
  const userID = user._id;

  const [teamName, setteamName] = useState("");
  const [dept, setdept] = useState("");
  const [lname, setLname] = useState("");
  const [lphone, setLphone] = useState("");
  const [luniid, setLuniid] = useState("");
  const [lemail, setLemail] = useState("");
  const [lsection, setLsection] = useState("");



  const { eventid } = useParams();
  const { members } = useParams();


  const postData = () => {
    

    //sending data to server
    fetch("/registereventDebate", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
           "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
            teamName : teamName,
            leaderId : userID,
            dept : dept,
            Lname : lname,
            Lphone : lphone,
            LuniId : luniid,
            Lemail : lemail,
            Lsection : lsection,
            eventid : eventid,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                // notifyA(data.error);
                console.log(data.error);
            } else {
                // notifyB("Data saved successfully");
                console.log("Data saved successfully")
                console.log(data);
                navigate("/");
            }

            console.log(data);
        });
};


  return (
    <div>
        <Navbar/>
      RegisterForDebate <br/>
      <input onChange={(e) => {setteamName(e.target.value)}} value={teamName} placeholder='Team Name' type="text" name="" id="" /><br />
            <input onChange={(e) => {setdept(e.target.value)}} value={dept} placeholder='department' type="text" name="" id="" /><br />
            <input onChange={(e) => {setLname(e.target.value)}} value={lname} placeholder='Leader name' type="text" name="" id="" /><br />
            <input onChange={(e) => {setLphone(e.target.value)}} value={lphone} placeholder='Leader phone number' type="number" name="" id="" /><br />
            <input onChange={(e) => {setLuniid(e.target.value)}} value={luniid} placeholder='Leader University Id' type="number" name="" id="" /><br />
            <input onChange={(e) => {setLemail(e.target.value)}} value={lemail} placeholder='Leader Email' type="text" name="" id="" /><br />
            <input onChange={(e) => {setLsection(e.target.value)}} value={lsection} placeholder='Leader Section' type="text" name="" id="" /><br />
      

            <button onClick={() => {postData()}}>Submit</button>
      </div>
  )
}

export default RegisterForDebate