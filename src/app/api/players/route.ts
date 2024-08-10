import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const newPlayer = await prisma.player.create({
      data: {
        name: body.name,
      },
    });

    return NextResponse.json({ message: "Player added", data: newPlayer });
  } catch (error) {
    console.error("Error parsing body:", error);
    return NextResponse.json(
      { message: "Failed to parse body" },
      { status: 400 }
    );
  }
};

export const GET = async () => {
  try {
    const players = await prisma.player.findMany();

    return NextResponse.json({ data: players });
  } catch (error) {
    console.error("Error fetching players:", error);
    return NextResponse.json(
      { message: "Failed to fetch players" },
      { status: 500 }
    );
  }
};
