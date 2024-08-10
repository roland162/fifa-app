import { useChampionships } from "@/lib/hooks/useChampionships";
import { useMatches } from "@/lib/hooks/useMatches";
import { usePlayers } from "@/lib/hooks/usePlayers";
import { useState } from "react";

export const Table = () => {

  const [playerInput, setPlayerInput] = useState('');
  const addPlayer = async () => {
    await fetch('http://localhost:3000/api/players', {
      method: 'POST',
      body: JSON.stringify({ name: playerInput }),
    }
    )
  }

  const addChampionship = async () => {
    await fetch('http://localhost:3000/api/championships', {
      method: 'POST',
      body: JSON.stringify({
        name: "Championship test",
        playerIds: ["clzn1fdqm0000a2xk8gbpg1gt", "clzn1fmza0001a2xkgmag2qr2", "clzn1fp9c0002a2xkokrxijff"],
        numberOfMatchesPerPlayer: 2
      }),
    }
    )

    
  }

  useChampionships();
  useMatches();
  usePlayers();

  return <div style={{
    background: "red"
  }}>
    <input value={playerInput} onChange={(e) => setPlayerInput(e.target.value)} />
    <button onClick={addPlayer}>Add Player</button>
    <button onClick={addChampionship}>Add Championship</button>
  </div>
}