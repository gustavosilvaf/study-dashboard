import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => (
  <Flex align="center">
    {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Gustavo Silva</Text>
        <Text color="gray.300">gustavofsilva@email.com</Text>
      </Box>
    )}
    <Avatar
      size="md"
      name="Gustavo Silva"
      src="https://github.com/gustavosilvaf.png"
    />
  </Flex>
);
