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
        },
        {
          name: "Usuários",
          icon: RiContactsLine,
        },
      ],
    },
    {
      sessionName: "AUTOMAÇÃO",
      items: [
        {
          name: "Formulários",
          icon: RiInputMethodLine,
        },
        {
          name: "Automação",
          icon: RiGitMergeLine,
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
