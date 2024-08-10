'use client';
import { Badge, Box, Container, Flex, Text } from "@radix-ui/themes";

export const Header = () => {
    return (
        <Flex align="center" width="100%" height="60px" className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4">
                <Flex justify="between" align="center" width="100%">
                    <Flex gap="16px" align="center">
                        <img src="/ball.png" alt="FIFA Championship" width="40" />
                        <Text className="text-white" weight="bold" >FIFA Championship</Text>
                    </Flex>
                    <Flex justify="end" gap="20px" align="center">
                    <Badge color="red" highContrast variant="solid" size="2">
                    🏆 Last Championship Winner: No championships yet
                    </Badge>
                    <Badge color="purple" highContrast variant="solid" size="2">
                    ⚽ Last Match Winner: No matches yet
                    </Badge>
                    </Flex>
                </Flex>
        </Flex>
    )
}