import {Icon, Link as ChakraLink, LinkProps, Text} from "@chakra-ui/react";
import {IconType} from "react-icons";
import Link from 'next/link'
import {useRouter} from "next/dist/client/router";

export interface NavLinkProps extends LinkProps {
    name: string;
    icon: IconType;
    link: string;
}

export const NavLink = ({name, icon, link, ...rest}: NavLinkProps) => {
    const {asPath} = useRouter();

    const colorToUse = asPath === link || asPath.startsWith(link)? "pink.500" : "gray.50";

    return (
        <Link href={link} passHref>
            <ChakraLink display="flex" align="center" {...rest} color={colorToUse}>
                <Icon as={icon} fontSize="20"/>
                <Text ml="4" fontWeight="medium">
                    {name}
                </Text>
            </ChakraLink>
        </Link>
    );
};
