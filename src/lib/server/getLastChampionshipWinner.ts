import { prisma } from "../prisma";

export const getLastChampionshipWinner = async () => {
  "use server";

  const lastChampionship = await prisma.championship.findFirst({
    orderBy: {
      updatedAt: "desc",
    },
  });

  return lastChampionship;
};
