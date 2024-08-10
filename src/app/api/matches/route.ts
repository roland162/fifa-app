import { prisma } from "@/lib/prisma";
import { matchGenerator } from "@/lib/utils/generators";
import { Match } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";
import { z } from "zod";

const MatchSchema = z.object({
  name: z.string(),
  playerIds: z.array(z.string()),
  championshipId: z.string().optional(),
});

type MatchReqBody = z.infer<typeof MatchSchema>;

export const POST = async (req: NextRequest) => {
  const body: MatchReqBody = await req.json();

  try {
    const newMatch = await prisma.match.create({
      data: matchGenerator(
        body.playerIds,
        body.championshipId ?? "standalone"
      ) as Match,
    });

    return NextResponse.json({
      message: "Match created",
      data: newMatch,
    });
  } catch (e) {
    console.error("Error creating match:", e);
    return NextResponse.json(
      { message: "Failed to create match" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const matches = await prisma.match.findMany();

    return NextResponse.json({ data: matches });
  } catch (e) {
    console.error("Error fetching matches:", e);
    return NextResponse.json(
      { message: "Failed to fetch matches" },
      { status: 500 }
    );
  }
};
