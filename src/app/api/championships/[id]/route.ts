import { prisma } from "@/lib/prisma";
import { Championship } from "@/lib/types/player";
import { NextRequest, NextResponse } from "next/server";

type ChampionshipReqBody = Partial<Championship>;

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const body: ChampionshipReqBody = await req.json();

  try {
    const newChampionship = await prisma.championship.update({
      where: {
        id: params.id,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json({
      message: "Championship updated",
      data: newChampionship,
    });
  } catch (e) {
    console.error("Error updating championship:", e);
    return NextResponse.json(
      { message: "Failed to update championship" },
      { status: 500 }
    );
  }
};

export const GET = async (
  _req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const selectedChampionship = await prisma.championship.findUnique({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({
      message: "Championship retrieved",
      data: selectedChampionship,
    });
  } catch (e) {
    console.error("Error retrieving championship:", e);
    return NextResponse.json(
      { message: "Failed to retrieve championship" },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  _req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await prisma.championship.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({
      message: "Championship deleted",
    });
  } catch (e) {
    console.error("Error deleting championship:", e);
    return NextResponse.json(
      { message: "Failed to delete championship" },
      { status: 500 }
    );
  }
};
