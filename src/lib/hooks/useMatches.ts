import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../api/apiUtils";

export const useMatches = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["matches"],
    queryFn: async () => {
      const response = await API.get("/matches");
      return await response;
    },
  });

  const createMatch = useMutation({
    mutationFn: async ({
      name,
      playerIds,
      championshipId = "standalone",
    }: {
      name: string;
      playerIds: string[];
      championshipId?: string;
    }) => {
      const response = await API.post("/matches", {
        name,
        playerIds,
        championshipId,
      });
      return response;
    },
  });

  const deleteMatch = useMutation({
    mutationFn: async (id: string) => {
      const response = await API.delete(`/matches/${id}`);
      return response;
    },
  });

  return {
    matches: data,
    isLoading,
    createMatch,
    deleteMatch,
  };
};
