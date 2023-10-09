// import mongoose from "mongoose";
// const connection: any = {};
// const connectMongoDB = async () => {
//   try {
//     if (connection.isConnected) return;
//     console.log("checking", process.env.MONGODB_URL);
//     const db = await mongoose.connect(process.env.MONGODB_URL);
//     console.log("Connected to MongoDB.");
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectMongoDB;
import mongoose from "mongoose";
import { ConnectionStates } from "mongoose";

let connection: typeof mongoose | null = null;
const poolsize = 10;

const connectMongoDB = async () => {
  if (
    connection === null ||
    (connection.connection.readyState !== ConnectionStates.connected &&
      connection.connection.readyState !== ConnectionStates.connecting)
  ) {
    console.log("[MONGOOSE] Creating New Connection");

    mongoose.connection.on("open", () => {
      console.log(`[MONGOOSE] Connected with poolSize ${poolsize}`);
    });

    try {
      await mongoose.connect(process.env.MONGODB_URL, {});
      mongoose.set("bufferTimeoutMS", 2500);
    } catch (err) {
      console.log("Mongoose connection error", err);
    }
    connection = mongoose;
    return;
  } else {
    return;
  }
};

export default connectMongoDB;
