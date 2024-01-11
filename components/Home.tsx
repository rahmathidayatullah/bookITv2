import React from "react";
import RoomItem from "./room/RoomItem";

const getRooms = async () => {
  const res = await fetch("http://localhost:3000/api/rooms", {
    next: {
      tags: ["Rooms"],
    },
  });
  return res.json();
};

const Home = async () => {
  const rooms = await getRooms();
  // console.log("rooms", rooms);
  console.log("resPerPage => ", rooms.resPerPage);

  return (
    <div>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">All Rooms</h2>
        <a href="/search" className="ml-2 back-to-search">
          <i className="fa fa-arrow-left"></i> Back to Search
        </a>
        <div className="row mt-4">
          <RoomItem />
        </div>
      </section>
    </div>
  );
};

export default Home;
