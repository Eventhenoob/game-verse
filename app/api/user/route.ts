import { NextResponse } from "next/server";
import { closeDataBase, connectTo } from "@/services/connectDB";
import userModel from "@/models/userModel";
import { compare } from "@/utils/crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.username || !body.email || !body.password || !body.avator) {
      return NextResponse.json(
        {
          error: "Bad Request",
          message: "Invalid Information Provided",
        },
        { status: 400 }
      ); // Use a 400 Bad Request status code
    }

    connectTo("user");
    const foundUser = await userModel.findOne({ email: body.email });
    if (foundUser) {
      return NextResponse.json(
        {
          error: "Conflict",
          message: "This user already exists",
        },
        { status: 409 }
      ); // Use a 409 Conflict status code
    }

    const newUser = new userModel({
      name: body.username,
      email: body.email,
      password: body.password,
      image: body.avator,
    });

    try {
      const userSaveResult = await newUser.save();
      return NextResponse.json(userSaveResult, { status: 201 }); // Use a 201 Created status code
    } catch (error) {
      return NextResponse.json(
        {
          error: "Internal Server Error",
          message: "Failed to create a new user",
        },
        { status: 500 }
      ); // Use a 500 Internal Server Error status code
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "An error occurred while processing the request",
      },
      { status: 500 }
    );
  }
}
