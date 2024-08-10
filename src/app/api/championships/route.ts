import { prisma } from "@/lib/prisma";
import { matchGenerator } from "@/lib/utils/generators";
import { Match } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";
import { z } from "zod";

const ChampionshipSchema = z.object({
  name: z.string(),
  playerIds: z.array(z.string()),
  numberOfMatchesPerPlayer: z.number(),
});

type ChampionshipReqBody = z.infer<typeof ChampionshipSchema>;
export const POST = async (req: NextRequest) => {
  const body: ChampionshipReqBody = await req.json();

  try {
    const combinations: { [key: string]: string[] } = {};

    for (const playerId of body.playerIds) {
      combinations[playerId] = body.playerIds.filter((id) => id !== playerId);
    }

    // First, create the Championship and get its ID
    const newChampionship = await prisma.championship.create({
      data: {
        name: body.name,
        maxMatches:
          body.playerIds.length * body.numberOfMatchesPerPlayer +
          body.playerIds.length * 2 +
          2,
        numberOfMatchesPerPlayer: body.numberOfMatchesPerPlayer,
      },
    });

    const matches: Match[] = [];

    // Generate matches using the newly created championship's ID
    Object.entries(combinations).forEach(([playerId, opponents]) => {
      opponents.forEach((opponentId) => {
        matches.push(
          matchGenerator([playerId, opponentId], newChampionship.id)
        );
      });
    });

    console.log("Matches:", matches);

    // Create all the match records
    for (const match of matches) {
      await prisma.match.create({
        data: match as Match,
      });
    }

    return NextResponse.json({
      message: "Championship created",
      data: newChampionship,
    });
  } catch (e) {
    console.error("Error creating championship:", e);
    return NextResponse.json(
      { message: "Failed to create championship" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const championships = await prisma.championship.findMany();

    return NextResponse.json({ data: championships });
  } catch (error) {
    console.error("Error fetching championships:", error);
    return NextResponse.json(
      { message: "Failed to fetch championships" },
      { status: 500 }
    );
  }
};
