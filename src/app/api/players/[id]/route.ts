import { prisma } from "@/lib/prisma";
import { omit } from "lodash";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await req.json();

    if (!params.id) {
      return NextResponse.json(
        { message: "Player id is required" },
        { status: 400 }
      );
    }

    const filteredBody = omit(body, ["id"]);

    const updatedPlayer = await prisma.player.update({
      where: {
        id: params.id,
      },
      data: {
        ...filteredBody,
      },
    });

    return NextResponse.json({
      message: "Player updated",
      data: updatedPlayer,
    });
  } catch (error) {
    console.error("Error parsing body:", error);
    return NextResponse.json(
      { message: "Failed to parse body" },
      { status: 400 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const body = await req.json();

  if (!params.id) {
    return NextResponse.json(
      { message: "Player id is required" },
      { status: 400 }
    );
  }
  try {
    await prisma.player.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      message: "Player deleted",
    });
  } catch (error) {
    console.error("Failed to delete player:", error);
    return NextResponse.json(
      { message: "Failed to delete player" },
      { status: 500 }
    );
  }
};
