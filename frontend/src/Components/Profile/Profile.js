import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import {useNavigate , Link , useParams} from 'react-router-dom'


function Profile() {

  const [events, setPic] = useState([]);
  const [events2, setPic2] = useState([]);
  const token = localStorage.getItem("jwt");
  let user = JSON.parse(localStorage.getItem("user"));
  const userID = user._id;


  const check = () => {
    console.log(userID);
    
  }

  const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        navigate("/signin");
      }
  
      const fetchOtherEventsProfile = () => {
        fetch("/geteventsforprofile", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        })
          .then((res) => res.json())
          .then((result) => {
            // Make sure result is an array or has an 'events' array
            const eventData = Array.isArray(result) ? result : result.events;
            setPic(eventData || []);
          })
      }


      const fetchOtherEventsProfile2 = () => {
        fetch("/getdebateforprofile", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        })
          .then((res) => res.json())
          .then((result) => {
            // Make sure result is an array or has an 'events' array
            const eventData2 = Array.isArray(result) ? result : result.events2;
            setPic2(eventData2 || []);
          })
      }
      
      fetchOtherEventsProfile();
      fetchOtherEventsProfile2();
    }, []);

    const withdrawParticipation = (eventid) => {
      fetch(`/withdrawParticipation/${eventid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({})
      })
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            alert('You have withdrawn from the event');
            
            // After withdrawal, re-fetch the updated events
            fetch("/geteventsforprofile", {
              headers: {
                Authorization: "Bearer " + token,
              },
            })
              .then((res) => res.json())
              .then((result) => {
                const eventData = Array.isArray(result) ? result : result.events;
                setPic(eventData || []);
              });
    
          } else {
            alert(result.message);
          }
        })
        .catch(error => console.error('Error:', error));
    
      fetch(`/deleteparticipations/${eventid}/${userID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    };



    const withdrawDebateParticipation = (eventid) => {
      fetch(`/withdrawDebateParticipation/${eventid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({})
      })
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            alert('You have withdrawn from the event');
            
            // After withdrawal, re-fetch the updated events
            fetch("/geteventsforprofile", {
              headers: {
                Authorization: "Bearer " + token,
              },
            })
              .then((res) => res.json())
              .then((result) => {
                const eventData = Array.isArray(result) ? result : result.events;
                setPic(eventData || []);
              });
    
          } else {
            alert(result.message);
          }
        })
        .catch(error => console.error('Error:', error));
    
      fetch(`/deleteparticipations/${eventid}/${userID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    };
    


  return (
    <div>
    <Navbar />

    <div>
      Live Events
      <div className="AllEvents">
        {events.length === 0 ? (
          <p>No event joined</p>
        ) : (
          events
            .filter((event) => new Date(event.endTime) >= new Date()) // Filter out expired events
            .map((event) => {
              return (
                <div key={event._id} className="Events">
                  <div className="imgSection">
                    {/* <Link to={`/viewparticular/${event._id}`}> */}
                      <img
                        src={event.pic}
                        alt={event.name}
                      />
                    {/* </Link> */}
                  </div>
                  <div className="dataSection">
                    <h3>{event.name}</h3>
                    <p>
                      {event.desc.length > 100
                        ? `${event.desc.slice(0, 200)}...`
                        : event.desc}
                    </p>
                    <p style={{ marginTop: "8px" }}>
                      <b>Members: </b>
                      {event.members}
                    </p>
                    <p style={{ marginTop: "8px" }}>
                      <b>Ends At: </b>
                      {new Date(event.endTime).toISOString().slice(0, 10)}
                    </p>

                    <div className="EventBtns">
                        <button onClick={() => {withdrawParticipation(event._id)}} className="updateBtn" style={{background : "red"}}>Withdrawal </button>
                        
                    </div>
                  </div>
                </div>
              );
            })
        )}
      </div>




      <div className="AllEvents">
        {events2.length === 0 ? (
          <p>No event joined</p>
        ) : (
          events2
            .filter((event) => new Date(event.endTime) >= new Date()) // Filter out expired events
            .map((event) => {
              return (
                <div key={event._id} className="Events">
                  <div className="imgSection">
                    {/* <Link to={`/viewparticular/${event._id}`}> */}
                      <img
                        src={event.pic}
                        alt={event.name}
                      />
                    {/* </Link> */}
                  </div>
                  <div className="dataSection">
                    <h3>{event.name}</h3>
                    <p>
                      {event.desc.length > 100
                        ? `${event.desc.slice(0, 200)}...`
                        : event.desc}
                    </p>
                    <p style={{ marginTop: "8px" }}>
                      <b>Members: </b>
                      {event.members}
                    </p>
                    <p style={{ marginTop: "8px" }}>
                      <b>Ends At: </b>
                      {new Date(event.endTime).toISOString().slice(0, 10)}
                    </p>

                    <div className="EventBtns">
                        <button onClick={() => {withdrawDebateParticipation(event._id)}} className="updateBtn" style={{background : "red"}}>Withdrawal </button>
                        
                    </div>
                  </div>
                </div>
              );
            })
        )}
      </div>


      {/* <button onClick={ () => {check()}}>Check</button> */}
    </div>



    
  </div>
  )
}

export default Profile