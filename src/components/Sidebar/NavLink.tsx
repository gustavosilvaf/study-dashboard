import { Link, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { RiContactsLine } from "react-icons/ri";

export interface NavLinkProps {
  name: string;
  icon: IconType;
}

export const NavLink = ({ name, icon }: NavLinkProps) => {
  return (
    <Link display="flex" align="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {name}
      </Text>
    </Link>
  );
};
