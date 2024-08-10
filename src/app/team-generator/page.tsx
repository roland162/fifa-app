import { TeamGeneratorTool } from "@/components/TeamGeneratorTool";
import { Flex, Text } from "@radix-ui/themes";

export default function PageGenerator() {

    return (
        <main className="flex flex-col p-5 w-full">
            <Text weight="bold" size="5">Team generator</Text>
            <Flex align="center" justify="center" height="100%">
            <TeamGeneratorTool />
            </Flex>
        </main>
    );
};