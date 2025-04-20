const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const requireLogin = require("../middleWares/requireLogin");
const EVENT = mongoose.model("EVENT");
const REGISTER = mongoose.model("REGISTER");
const  DEBATE = mongoose.model("DEBATE");




router.get("/allInnotechEvents", requireLogin, (req, res) => {
  EVENT.find().then((events) => {
    res.json(events);
  });
});




router.get("/getevent/:eventid" , (req,res) => {
  EVENT.findOne({_id : req.params.eventid})
  .then(product => {
      // console.log(product)
      return res.json(product)
  })
})


router.post("/registerevent", requireLogin, async (req, res) => {
  const {
    teamName,
    dept,
    Lname,
    Lphone,
    LuniId,
    Lsection,
    Lemail,
    eventid,
    M1name,
    M1phone,
    M1uniId,
    M1email,
    M1section,
    M2name,
    M2phone,
    M2uniId,
    M2email,
    M2section,
    M3name,
    M3phone,
    M3uniId,
    M3email,
    M3section,
    M4name,
    M4phone,
    M4uniId,
    M4email,
    M4section,
    leaderId,
  } = req.body;

  if (!teamName || !dept || !Lname || !Lphone || !LuniId || !Lsection || !Lemail) {
    return res.status(422).json({ error: "Please add all the fields" });
  }

  try {
    // Check if the user has already registered for this event
    const existingRegistration = await REGISTER.findOne({ eventid, leaderId });

    if (existingRegistration) {
      return res.status(400).json({ error: "You have already registered for this event" });
    }

    // Create new registration
    const participant = new REGISTER({
      teamName,
      dept,
      Lname,
      Lphone,
      LuniId,
      Lsection,
      Lemail,
      eventid,
      M1name,
      M1phone,
      M1uniId,
      M1email,
      M1section,
      M2name,
      M2phone,
      M2uniId,
      M2email,
      M2section,
      M3name,
      M3phone,
      M3uniId,
      M3email,
      M3section,
      M4name,
      M4phone,
      M4uniId,
      M4email,
      M4section,
      leaderId,
    });

    const savedParticipant = await participant.save();

    // Link the participant to the event
    await EVENT.findByIdAndUpdate(eventid, {
      $push: { register: req.user },
    });

    res.status(201).json({ message: "Participant registered and linked to event", participant: savedParticipant });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});



router.post("/registereventDebate", requireLogin, async (req, res) => {
  const {
    teamName,
    dept,
    Lname,
    Lphone,
    LuniId,
    Lsection,
    Lemail,
    eventid,
    leaderId,
  } = req.body;

  if (!teamName || !dept || !Lname || !Lphone || !LuniId || !Lsection || !Lemail) {
    return res.status(422).json({ error: "Please add all the fields" });
  }

  try {
    // Check if the user has already registered for this event
    const existingRegistration = await REGISTER.findOne({ eventid, leaderId });

    if (existingRegistration) {
      return res.status(400).json({ error: "You have already registered for this event" });
    }

    // Create new registration
    const participant = new REGISTER({
      teamName,
      dept,
      Lname,
      Lphone,
      LuniId,
      Lsection,
      Lemail,
      eventid,
      leaderId,
    });

    const savedParticipant = await participant.save();

    // Link the participant to the event
    await DEBATE.findByIdAndUpdate(eventid, {
      $push: { register: req.user },
    });

    res.status(201).json({ message: "Participant registered and linked to event", participant: savedParticipant });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});




router.put('/withdrawParticipation/:eventid', requireLogin, async (req, res) => {
  try {
    const updatedEvent = await EVENT.findByIdAndUpdate(
      req.params.eventid,
      { $pull: { register: req.user._id } }, 
      { new: true } 
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({ message: "Successfully withdrawn", event: updatedEvent });
  } catch (error) {
    console.error("Error withdrawing participation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/allregisteredparticipants/:eventid", (req, res) => {
    REGISTER.find({eventid : req.params.eventid}).then((participants) => {
        res.json(participants);
    });
});



router.delete('/deleteparticipations/:eventid/:leaderId', async (req, res) => {
  try {
    const { eventid, leaderId } = req.params;

    // Assuming you're using Mongoose to interact with MongoDB
    const result = await REGISTER.deleteMany({ eventid, leaderId });

    if (result.deletedCount === 1) {
      return res.status(200).json({ message: 'Participation deleted successfully' });
    } else {
      return res.status(404).json({ message: 'Participation not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});




router.get("/geteventsforprofile", requireLogin, async (req, res) => {
  try {
      // Assuming req.user contains the user ObjectId
      const userId = new mongoose.Types.ObjectId(req.user._id);

      // const events = await EVENT.find();
      const events = await EVENT.find();
      const filteredEvents = events.filter(event => 
          event.register.some(reg => reg.equals(userId))
      );

      res.json(filteredEvents);
  } catch (error) {
      console.error(error);  // Log error for better debugging
      res.status(500).json({ error: "Server error" });
  }
});

router.get("/getdebateforprofile", requireLogin, async (req, res) => {
  try {
      // Assuming req.user contains the user ObjectId
      const userId = new mongoose.Types.ObjectId(req.user._id);
      const debate = await DEBATE.find();
      const filteredEvents = debate.filter(event => 
          event.register.some(reg => reg.equals(userId))
      );

      res.json(filteredEvents);
  } catch (error) {
      console.error(error);  // Log error for better debugging
      res.status(500).json({ error: "Server error" });
  }
});



router.put('/withdrawDebateParticipation/:eventid', requireLogin, async (req, res) => {
  try {
    const updatedEvent = await DEBATE.findByIdAndUpdate(
      req.params.eventid,
      { $pull: { register: req.user._id } }, 
      { new: true } 
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({ message: "Successfully withdrawn", event: updatedEvent });
  } catch (error) {
    console.error("Error withdrawing participation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});










module.exports = router;