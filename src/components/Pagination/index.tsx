import { Stack, Box } from "@chakra-ui/react";
import { PageButton } from "./PageButton";

export const Pagination = () => {
  const pages = [
    {
      number: 1,
      isActive: true,
    },
    {
      number: 2,
      isActive: false,
    },
    {
      number: 3,
      isActive: false,
    },
    {
      number: 4,
      isActive: false,
    },
  ];

  return (
    <Stack
      direction={["column","row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {pages.map((page) => (
          <PageButton
            key={page.number}
            isActive={page.isActive}
            number={page.number}
          />
        ))}
      </Stack>
    </Stack>
  );
};
