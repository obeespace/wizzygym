import Fitfams from "../../../models/user"; // Adjust path as needed
import bcrypt from "bcryptjs";
import connectDb from "../../../util/dbConnect";

export async function POST(request) {
  try {
    await connectDb();
    const body = await request.json();
    const {
      fullname,
      email,
      password,
      phoneNumber,
      gender,
      nickname,
      bodygoals,
    } = body;

    if (
      !fullname ||
      !email ||
      !bodygoals ||
      !gender ||
      !nickname ||
      !password ||
      !phoneNumber
    ) {
      return Response.json(
        { message: "Kindly input all required fields" },
        { status: 400 }
      );
    }

    // Check if a user with the provided email already exists
    const existingUser = await Fitfams.findOne({ email });
    if (existingUser) {
      return Response.json(
        { message: "User with this email already exists" },
        { status: 409 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new Fitfams({
      fullname,
      phoneNumber,
      email,
      bodygoals,
      gender,
      nickname,
      subscription: "Disactivated",
      trainer: "New User",
      password: hashedPassword,
    });

    const userRegData = await user.save();
    // Remove password from response
    const userObj = userRegData.toObject();
    delete userObj.password;

    return Response.json(userObj, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Server error, Check connection and try again" },
      { status: 500 }
    );
  }
}