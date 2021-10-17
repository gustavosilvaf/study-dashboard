import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../context/SidebarContext";
import { Logo } from "../Header/Logo";
import { NotificationNav } from "../Header/NotificationNav";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSideBarDrawer();

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
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
