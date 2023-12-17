import mongoose from "mongoose";

// const dbLink = process.env.dbLink?.replaceAll(
//   "<password>",
//   process.env.dbPassword || ""
// );

export async function connect() {
  return await mongoose.connect("mongodb://127.0.0.1:27017");
}

export async function connectTo(to: string) {
  return await mongoose.connect(`mongodb://127.0.0.1:27017/${to}`);
}

export function closeDataBase() {
  mongoose.connection.close();
}
