// app/api/register/route.js

import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, password } = await request.json();

  // Perform your server-side logic here
  // For example, save the data to a database

  // Simulating a database save with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(name, email, password);
  // Respond with a success message
  return NextResponse.json({
    message: "User registered successfully!",
    name,
    email,
    password,
  });
}
