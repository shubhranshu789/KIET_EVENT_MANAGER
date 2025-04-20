import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../Navbar/Navbar';
import './ViewParticulr.css'
function ViewParticulr() {

    const navigate = useNavigate()

    const notifyA = (msg) => toast.error(msg)
    const notifyB = (msg) => toast.success(msg)

    const { eventid } = useParams();
    const [pic3, setPic] = useState([]);

    const [values, setValues] = useState({
        name: "",
        endTime: "",
        members: "",
        desc: "",
        pic: "",
    });



    useEffect(() => {

        fetch(`/getevent/${eventid}`, {
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(result => {
                setValues({ ...values, name: result.name, desc: result.desc, endTime: result.endTime, members: result.members, pic: result.pic })
                setPic(result)
                console.log(result)
            })

    }, []);


    return (
        <div>
            <Navbar />

            <div className="Container-Box">
                <div className="ImgSection">
                    <img src={values.pic} alt="Profile" />
                </div>

                <div className="DetailsSection">
                    <p style={{ textAlign: "justify" }} className="Name">{values.name}</p>
                    <p style={{ textAlign: "justify" }} className="Description">{values.desc}</p>
                    <p style={{ textAlign: "justify" }} className="EndTime">End Time: {values.endTime}</p>
                    <p style={{ textAlign: "justify" }} className="Members">Members: {values.members}</p>

                    <div className="EventBtns">
                        <Link to={`/registerparticipants/${eventid}/${values.members}`}>
                            <button className="updateBtn">Register</button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewParticulr