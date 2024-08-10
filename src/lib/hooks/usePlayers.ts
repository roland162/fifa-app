import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../api/apiUtils";

export const usePlayers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["players"],
    queryFn: async () => {
      const response = await API.get("/players");
      return await response;
    },
  });

  const createPlayer = useMutation({
    mutationFn: async ({ name }: { name: string }) => {
      const response = await API.post("/players", {
        name,
      });
      return response;
    },
  });

  const deletePlayer = useMutation({
    mutationFn: async (id: string) => {
      const response = await API.delete(`/players/${id}`);
      return response;
    },
  });

  return {
    players: data,
    isLoading,
    createPlayer,
    deletePlayer,
  };
};
