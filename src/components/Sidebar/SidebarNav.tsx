import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavSession } from "./NavSession";

export const SidebarNav = () => {
  const sessionItems = [
    {
      sessionName: "GERAL",
      items: [
        {
          name: "Dashboard",
          icon: RiDashboardLine,
          link: '/dashboard'
        },
        {
          name: "Usuários",
          icon: RiContactsLine,
          link: '/users'
        },
      ],
    },
    {
      sessionName: "AUTOMAÇÃO",
      items: [
        {
          name: "Formulários",
          icon: RiInputMethodLine,
          link: '/forms'
        },
        {
          name: "Automação",
          icon: RiGitMergeLine,
          link: '/automation'
        },
      ],
    },
  ];

  return (
    <Stack spacing="12" align="flex-start">
      {sessionItems.map((session) => (
        <NavSession
          sessionName={session.sessionName}
          links={session.items}
          key={session.sessionName}
        />
      ))}
    </Stack>
  );
};
