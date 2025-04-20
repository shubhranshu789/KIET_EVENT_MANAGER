import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { ToastContainer, toast } from "react-toastify";

import { useNavigate, Link } from 'react-router-dom'
import "./Home.css";

import { TextParallaxContentExample } from '../UthaeHueComponents/TextParallaxContentExample';


function Home() {

  const [pic, setPic] = useState([]);

  const navigate = useNavigate();
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  const currentDate = new Date(); // Get the current date
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }

    fetch("/allInnotechEvents", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPic(result);
        // setPosts(result)
        console.log(pic);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "10px" }}>
        <TextParallaxContentExample />
      </div>


      {/* <div>
      Live Events
      <div className="AllEvents">
        {pic
          .filter((pics) => new Date(pics.endTime) >= new Date()) // Filter out expired events
          .map((pics) => {
            return (
              <div key={pics._id} className="Events">
                <div className="imgSection">
                  <Link to={`/viewparticular/${pics._id}`}>
                    <img
                      style={{ cursor: "pointer" }}
                      src={pics.pic}
                      alt={pics.name}
                    />
                  </Link>
                </div>
                <div className="dataSection">
                  <h3>{pics.name}</h3>
                  <p>
                    {pics.desc.length > 100
                      ? `${pics.desc.slice(0, 200)}...`
                      : pics.desc}
                  </p>
                  <p style={{ marginTop: "8px" }}>
                    <b>Members: </b>
                    {pics.members}
                  </p>
                  <p style={{ marginTop: "8px" }}>
                    <b>Ends At: </b>
                    {new Date(pics.endTime).toISOString().slice(0, 10)}
                  </p>

                  <div className="EventBtns">
                    <Link to={`/registerparticipants/${pics._id}/${pics.members}`}>
                      <button className="updateBtn">Register</button>
                    </Link>
                  </div>


                  
                </div>
              </div>
            );
          })}
      </div>
    </div> */}
    </div>
  )
}

export default Home