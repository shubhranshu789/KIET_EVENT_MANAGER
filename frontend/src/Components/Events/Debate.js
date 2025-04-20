import React, { useEffect  , useState} from 'react'
import Navbar from '../Navbar/Navbar'
import { ToastContainer, toast } from "react-toastify";

import {useNavigate , Link} from 'react-router-dom'
import '../Home/Home.css'


function Debate() {

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


        
    
        fetch("/viewalldebate", {
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

    <div>
  <div
    className="AllEvents"
    style={{
      backgroundColor: "#171717",
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <h1 style={{ color: "white" }}>Debate Events</h1>
    {pic.filter((pics) => new Date(pics.endTime) >= new Date()).length > 0 ? (
      pic
        .filter((pics) => new Date(pics.endTime) >= new Date()) // Filter out expired events
        .map((pics) => (
          <div key={pics._id} className="Events" style={{ width: "75%" }}>
            <div className="imgSection">
              {/* <Link to={`/viewparticular/${pics._id}`}> */}
                <img
                  
                  src={pics.pic}
                  alt={pics.name}
                />
              {/* </Link> */}
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
                <Link to={`/registerfordebate/${pics._id}/${pics.members}`}>
                  <button className="updateBtn">Register</button>
                </Link>
              </div>
            </div>
          </div>
        ))
    ) : (
      <p style={{ color: "white", marginTop: "20px" }}>No event is live</p>
    )}
  </div>
</div>





  </div>
  )
}

export default Debate