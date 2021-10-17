import { Link, Icon, Text, LinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { RiContactsLine } from "react-icons/ri";

export interface NavLinkProps extends LinkProps {
  name: string;
  icon: IconType;
}

export const NavLink = ({ name, icon, ...rest }: NavLinkProps) => {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {name}
      </Text>
    </Link>
  );
};
