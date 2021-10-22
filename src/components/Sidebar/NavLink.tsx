import { Link as ChakraLink, Icon, Text, LinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import Link from 'next/link'

export interface NavLinkProps extends LinkProps {
  name: string;
  icon: IconType;
  link: string;
}

export const NavLink = ({ name, icon, link, ...rest }: NavLinkProps) => {
  return (
      <Link href={link} passHref>
          <ChakraLink display="flex" align="center" {...rest}>
              <Icon as={icon} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                  {name}
              </Text>
          </ChakraLink>
      </Link>
  );
};
