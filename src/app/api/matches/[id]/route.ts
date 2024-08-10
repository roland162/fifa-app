import { prisma } from "@/lib/prisma";
import { Match } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type MatchReqBody = Partial<Match>;

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const body: MatchReqBody = await req.json();

  try {
    const newMatch = await prisma.match.update({
      where: {
        id: params.id,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json({
      message: "Match updated",
      data: newMatch,
    });
  } catch (e) {
    console.error("Error updating match:", e);
    return NextResponse.json(
      { message: "Failed to update match" },
      { status: 500 }
    );
  }
};

export const GET = async (
  _req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const selectedMatch = await prisma.match.findUnique({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({
      message: "Match retrieved",
      data: selectedMatch,
    });
  } catch (e) {
    console.error("Error retrieving match:", e);
    return NextResponse.json(
      { message: "Failed to retrieve match" },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  _req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await prisma.match.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({
      message: "Match deleted",
    });
  } catch (e) {
    console.error("Error deleting match:", e);
    return NextResponse.json(
      { message: "Failed to delete match" },
      { status: 500 }
    );
  }
};
