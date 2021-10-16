import { Flex, Icon, Input, Text, HStack, Box, Avatar } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";
import { Logo } from "./Header/Logo";
import { NotificationNav } from "./Header/NotificationNav";
import { Profile } from "./Header/Profile";
import { SearchBox } from "./Header/SearchBox";

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  );
};
