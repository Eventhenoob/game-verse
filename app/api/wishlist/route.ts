import { connectTo } from "@/services/connectDB";
import userModel from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");

  try {
    if (!email) {
      return NextResponse.json(
        {
          error: "Bad Request",
          message: "Email parameter is required",
        },
        { status: 400 }
      );
    }

    connectTo("user");
    const foundUser = await userModel.findOne({ email });

    if (!foundUser) {
      return NextResponse.json(
        {
          error: "User not found",
          message: "Email does not exist.",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(foundUser.wishlist);
  } catch (e: any) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "An error occurred while processing the request",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.email || !data.gameId) {
      return NextResponse.json(
        {
          error: "Bad Request",
          message: "Insufficient Parameters Provided",
        },
        { status: 400 }
      );
    }

    connectTo("user");
    const foundUser = await userModel.findOne({ email: data.email });

    if (!foundUser) {
      return NextResponse.json(
        {
          error: "User not found",
          message: "Email does not exist.",
        },
        { status: 404 }
      );
    }

    foundUser.wishlist.push(+data.gameId);
    foundUser.save();

    return NextResponse.json(
      {
        message: "Wishlist Updated Successfully",
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "An error occurred while processing the request",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email");
    const gameId = url.searchParams.get("gameId");

    if (!email || !gameId) {
      return NextResponse.json(
        {
          error: "Bad Request",
          message: "Insufficient Parameters Provided",
        },
        { status: 400 }
      );
    }

    connectTo("user");
    const foundUser = await userModel.findOne({ email: email });

    if (!foundUser) {
      return NextResponse.json(
        {
          error: "User not found",
          message: "Email does not exist.",
        },
        { status: 404 }
      );
    }

    foundUser.wishlist = foundUser.wishlist.filter(
      (currentGame: number) => currentGame != +gameId
    );

    foundUser.save();

    return NextResponse.json(
      {
        message: "Wishlist Updated Successfully",
      },
      { status: 200 }
    );
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
