import Room from "../backend/models/room";
import mongoose from "mongoose";
import { rooms } from "./data";
// require('dotenv').config({ path: 'next.config.js' })

const url = `${process.env.DB_LOCAL_URI}`;
const seedRooms = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rahmathidayatullah996:4fBHgJMmvrvPxlxB@bookitv2database.vqrwmxe.mongodb.net/?retryWrites=true&w=majority"
    );

    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("Rooms are added");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedRooms();
