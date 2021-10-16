import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export const Profile = () => (
  <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Gustavo Silva</Text>
      <Text color="gray.300">gustavofsilva@email.com</Text>
    </Box>
    <Avatar
      size="md"
      name="Gustavo Silva"
      src="https://github.com/gustavosilvaf.png"
    />
  </Flex>
);
