import { Box, Text, Stack } from "@chakra-ui/react";
import { NavLink, NavLinkProps } from "./NavLink";

interface NavSessionProps {
  sessionName: string;
  links: NavLinkProps[];
}

export const NavSession = ({ sessionName, links }: NavSessionProps) => {
  console.log(sessionName, links);

  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {sessionName}
        <Stack spacing="6" mt="8" align="stretch">
          {links.map((link) => (
            <NavLink key={link.name} name={link.name} icon={link.icon} />
          ))}
        </Stack>
      </Text>
    </Box>
  );
};
