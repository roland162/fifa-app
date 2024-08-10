'use client';

import { teams } from "@/lib/constants/teams";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { useRef, useState } from "react";

type TeamState = {
    logo: string | null;
    name: string;
}

const teamBoxStyle = "border-2 border-gray-200 p-4 rounded-md w-1/4 min-w-[300px]";

export const TeamGeneratorTool = () => {

    const [generatedTeamHome, setGeneratedTeamHome] = useState<TeamState>({
        logo: null,
        name: '-',
    });
    const [generatedTeamAway, setGeneratedTeamAway] = useState<TeamState>({
        logo: null,
        name: '-',
    });

    const onGenerateTeams = () => {
        // Set values every 0.05 seconds to simulate drawing
        const formattedTeams = Object.entries(teams).map(([name, logo]) => ({
            name,
            logo,
        }));

        const interval = setInterval(() => {
            setGeneratedTeamHome(formattedTeams[Math.floor(Math.random() * formattedTeams.length)]);
            setGeneratedTeamAway(formattedTeams[Math.floor(Math.random() * formattedTeams.length)]);
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
        }, 2000);

    }

    return (
        <Box>
            <img src="/player.png" alt="FIFA Championship" style={{
                height: "200px",
                width: "auto",
                margin: "0 auto 20px",
            }} />
            <Flex justify="center" align="center" gap="20px">
                <Box>
                <Text align="center" size="4" weight="bold">Home</Text>
                <Flex className={teamBoxStyle} align="center" gap="10px">
                    {generatedTeamHome.logo && <img src={"/teams/" + generatedTeamHome.logo} alt={generatedTeamHome.name} style={{
                        height: "30px",
                        width: "auto"
                    }} />}
                    <Text weight="medium">{generatedTeamHome.name}</Text>
                </Flex>
                </Box>
                <Text weight="bold" size="6" mt="20px">vs</Text>
                <Box>
                <Box className="text-right">
                <Text align="right" size="4" weight="bold">Away</Text>
                </Box>
                <Flex className={teamBoxStyle} align="center" justify="end" gap="10px">
                
                <Text weight="medium">{generatedTeamAway.name}</Text>
                {generatedTeamAway.logo && <img src={"/teams/" + generatedTeamAway.logo} alt={generatedTeamAway.name} style={{
                        height: "30px",
                        width: "auto"
                    }} />}
                </Flex>
                </Box>
            </Flex>

            <Flex justify="center" className="mt-10">
                <Button size="4" onClick={onGenerateTeams}>Generate Teams</Button>
            </Flex>
        </Box>
    )
};