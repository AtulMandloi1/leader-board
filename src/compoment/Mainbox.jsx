import React, { useEffect, useState } from "react";
import Image from "../assest/images.png";
import "./Mainbox.css";

const Mainbox = () => {
  const divStyle = {
    backgroundImage: `url(${Image})`,
    backgroundColor: "red",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    width: "100%",
    position:"relative",
  };


  const [playerInfo, setPlayerInfo] = useState([
    { name: "Atul", time: "12:00:00" },
    { name: "Shubham", time: "14:30:45" },
    { name: "Rohit", time: "09:00:00" },
    { name: "name", time: "13:00:00" },
    { name: "name", time: "23:00:00" },
    { name: "name", time: "22:00:00" },
    { name: "name", time: "18:00:00" },
    { name: "name", time: "21:00:00" },
    { name: "name", time: "19:00:00" },
    { name: "name", time: "14:00:00" },
    { name: "name", time: "19:00:00" },
    { name: "name", time: "17:00:00" },
    // { name: "name", time: "16:00:00" },
    // { name: "name", time: "15:00:00" },
  ]);


  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [newEntry, setNewEntry] = useState(null);

  const parseTime = (timeStr) => {
    const [hours, minutes, seconds] = timeStr.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const sortedEntries = [...playerInfo].sort(
    (a, b) => parseTime(a.time) - parseTime(b.time)
  );

  const handleAddEntry = (e) => {
    e.preventDefault();
    const newEntry = { name, time };
    setPlayerInfo([...playerInfo, newEntry]);
    setName("");
    setTime("");
    setNewEntry(newEntry);
  };

  const getPriceMoney = (index) => {
    if (index === 1) return "₹ 40,000";
    else if (index === 2) return "₹ 30,000";
    else if (index === 3) return "₹ 50,000";
  };

  return (
    <div className="mainbox" style={divStyle}>
      <form onSubmit={handleAddEntry} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter player name"
          required
          className="inputName"
          style={{
            padding: "0.5%",
            borderRadius: "4px",
            border: "none",
            outline: "none",
          }}
        />
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time (HH:MM:SS)"
          required
          className="inputTime"
          style={{
            marginLeft: "4px",
            padding: "0.5%",
            borderRadius: "4px",
            border: "none",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "4px",
            padding: "0.5%",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Add Entry
        </button>
      </form>

      <ul className="list">
        {sortedEntries.map((entry, index) => (
          <li key={index} className={entry === newEntry ? "new-entry" : ""}>
            <div className="flex-container">
              <div className="flex-item">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <div className="flex-item">{entry.name}</div>
              <div className="flex-item">{getPriceMoney(index + 1)}</div>
              <div className="flex-item">{entry.time}</div>
            </div>
          </li>
        ))}
      </ul>
     </div>
    // </div>
  );
};

export default Mainbox;
