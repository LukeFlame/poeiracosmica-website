import mongoose from 'mongoose';

const connection = {};

// Function that connects to the database
async function dbConnect() {
  if (connection.isConnected) return;

  // Connect
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Set isConnected
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
