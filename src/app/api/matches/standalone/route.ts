import { prisma } from "@/lib/prisma";
import { standaloneMatchGenerator } from "@/lib/utils/generators";
import { StandaloneMatch } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const StandaloneMatchSchema = z.object({
  name: z.string(),
  playerIds: z.array(z.string()),
});

type StandaloneMatchReqBody = z.infer<typeof StandaloneMatchSchema>;

export const POST = async (req: NextRequest) => {
  const body: StandaloneMatchReqBody = await req.json();

  try {
    const newStandaloneMatch = await prisma.standaloneMatch.create({
      data: standaloneMatchGenerator(body.playerIds) as StandaloneMatch,
    });

    return NextResponse.json({
      message: "StandaloneMatch created",
      data: newStandaloneMatch,
    });
  } catch (e) {
    console.error("Error creating standaloneMatch:", e);
    return NextResponse.json(
      { message: "Failed to create standaloneMatch" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const standaloneMatches = await prisma.standaloneMatch.findMany();

    return NextResponse.json({ data: standaloneMatches });
  } catch (e) {
    console.error("Error fetching standaloneMatches:", e);
    return NextResponse.json(
      { message: "Failed to fetch standaloneMatches" },
      { status: 500 }
    );
  }
};
