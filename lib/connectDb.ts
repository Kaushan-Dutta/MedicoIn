import mongoose from 'mongoose';

let isConnected = false;// Variable to track the connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);


  if(isConnected) return console.log('=> using existing database connection');

  try {
    await mongoose.connect(process.env.NEXT_APP_DB || '');

    isConnected = true;

    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error)
  }
}