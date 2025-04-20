import React, { useState } from 'react'
import {useNavigate , useParams} from 'react-router-dom'

import Navbar from '../Navbar/Navbar';

function RegisterParticipants() {

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


    const [M1name, setM1name] = useState("");
    const [M1phone, setM1phone] = useState("");
    const [M1uniId, setM1uniId] = useState("");
    const [M1email, setM1email] = useState("");
    const [M1section, setM1section] = useState("");

    const [M2name, setM2name] = useState("");
    const [M2phone, setM2phone] = useState(""); 
    const [M2uniId, setM2uniId] = useState("");
    const [M2email, setM2email] = useState("");
    const [M2section, setM2section] = useState("");

    const [M3name, setM3name] = useState("");
    const [M3phone, setM3phone] = useState("");
    const [M3uniId, setM3uniId] = useState("");
    const [M3email, setM3email] = useState("");
    const [M3section, setM3section] = useState("");

    const [M4name, setM4name] = useState("");
    const [M4phone, setM4phone] = useState("");
    const [M4uniId, setM4uniId] = useState("");
    const [M4email, setM4email] = useState("");
    const [M4section, setM4section] = useState("");


   

    const { eventid } = useParams();
    const { members } = useParams();


    const chk = () => {
        console.log(teamName, lname, dept , lphone );
    }

    const postData = () => {
    

        //sending data to server
        fetch("/registerevent", {
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

                 M1name : M1name,
                 M1phone : M1phone,
                 M1uniId : M1uniId,
                 M1email : M1email,
                 M1section : M1section,

                 M2name : M2name,
                 M2phone : M2phone,
                 M2uniId : M2uniId,
                 M2email : M2email,
                 M2section : M2section,

                 M3name : M3name,
                 M3phone : M3phone,
                 M3uniId : M3uniId,
                 M3email : M3email,
                 M3section : M3section,

                 M4name : M4name,
                 M4phone : M4phone,
                 M4uniId : M4uniId,
                 M4email : M4email,
                 M4section : M4section
                 
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
        <div>
            <input onChange={(e) => {setteamName(e.target.value)}} value={teamName} placeholder='Team Name' type="text" name="" id="" /><br />
            <input onChange={(e) => {setdept(e.target.value)}} value={dept} placeholder='department' type="text" name="" id="" /><br />
            <input onChange={(e) => {setLname(e.target.value)}} value={lname} placeholder='Leader name' type="text" name="" id="" /><br />
            <input onChange={(e) => {setLphone(e.target.value)}} value={lphone} placeholder='Leader phone number' type="number" name="" id="" /><br />
            <input onChange={(e) => {setLuniid(e.target.value)}} value={luniid} placeholder='Leader University Id' type="number" name="" id="" /><br />
            <input onChange={(e) => {setLemail(e.target.value)}} value={lemail} placeholder='Leader Email' type="text" name="" id="" /><br />
            <input onChange={(e) => {setLsection(e.target.value)}} value={lsection} placeholder='Leader Section' type="text" name="" id="" /><br />


            {
                1 < members ? 
                (
                    <section>
                        <input onChange={(e) => {setM1name(e.target.value)}} value={M1name} placeholder="M1 Name" type="text" /><br />
                        <input onChange={(e) => {setM1phone(e.target.value)}} value={M1phone} placeholder="M1 Phone" type="number" /><br />
                        <input onChange={(e) => {setM1uniId(e.target.value)}} value={M1uniId} placeholder="M1 University ID" type="number" /><br />
                        <input onChange={(e) => {setM1email(e.target.value)}} value={M1email} placeholder="M1 Email" type="email" /><br />
                        <input onChange={(e) => {setM1section(e.target.value)}} value={M1section} placeholder="M1 Section" type="text" /><br />
                    </section>
                ) : (
                    <p></p>
                )
            }
            
            
            {
                2 < members ? 
                (
                    <section>
                    <input onChange={(e) => {setM2name(e.target.value)}} value={M2name} placeholder="M2 Name" type="text" /><br />
                    <input onChange={(e) => {setM2phone(e.target.value)}} value={M2phone} placeholder="M2 Phone" type="number" /><br />
                    <input onChange={(e) => {setM2uniId(e.target.value)}} value={M2uniId} placeholder="M2 University ID" type="number" /><br />
                    <input onChange={(e) => {setM2email(e.target.value)}} value={M2email} placeholder="M2 Email" type="email" /><br />
                    <input onChange={(e) => {setM2section(e.target.value)}} value={M2section} placeholder="M2 Section" type="text" /><br />
                    </section>
                ) : (<p></p>)

            }

          
            
            {
                3 < members ? (
                    <section>
                    <input onChange={(e) => {setM3name(e.target.value)}} value={M3name} placeholder="M3 Name" type="text" /><br />
                    <input onChange={(e) => {setM3phone(e.target.value)}} value={M3phone} placeholder="M3 Phone" type="number" /><br />
                    <input onChange={(e) => {setM3uniId(e.target.value)}} value={M3uniId} placeholder="M3 University ID" type="number" /><br />
                    <input onChange={(e) => {setM3email(e.target.value)}} value={M3email} placeholder="M3 Email" type="email" /><br />
                    <input onChange={(e) => {setM3section(e.target.value)}} value={M3section} placeholder="M3 Section" type="text" /><br />
                    </section>   
                ) : (<p></p>)
            }
                         
            

            {
                4 < members ? 
                (
                    <section>
            <input onChange={(e) => {setM4name(e.target.value)}} value={M4name} placeholder="M4 Name" type="text" /><br />
            <input onChange={(e) => {setM4phone(e.target.value)}} value={M4phone} placeholder="M4 Phone" type="number" /><br />
            <input onChange={(e) => {setM4uniId(e.target.value)}} value={M4uniId} placeholder="M4 University ID" type="number" /><br />
            <input onChange={(e) => {setM4email(e.target.value)}} value={M4email} placeholder="M4 Email" type="email" /><br />
            <input onChange={(e) => {setM4section(e.target.value)}} value={M4section} placeholder="M4 Section" type="text" /><br />
            </section> 
                ) : (<p></p>)
            }

            
           


            {/* <button onClick={() => {postData()}}>Submit</button> */}
            <button onClick={() => {postData()}}>Submit</button>
        </div>
    </div>
  )
}

export default RegisterParticipants