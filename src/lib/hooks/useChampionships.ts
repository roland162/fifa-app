import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../api/apiUtils";

export const useChampionships = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["championships"],
    queryFn: async () => {
      const response = await API.get("/championships");
      return await response;
    },
  });

  const createChampionship = useMutation({
    mutationFn: async ({
      name,
      playerIds,
      numberOfMatchesPerPlayer = 2,
    }: {
      name: string;
      playerIds: string[];
      numberOfMatchesPerPlayer?: number;
    }) => {
      const response = await API.post("/championships", {
        name,
        playerIds,
        numberOfMatchesPerPlayer,
      });
      return response;
    },
  });

  const deleteChampionship = useMutation({
    mutationFn: async (id: string) => {
      const response = await API.delete(`/championships/${id}`);
      return response;
    },
  });

  return {
    championships: data,
    isLoading,
    createChampionship,
    deleteChampionship,
  };
};
