import { Button } from "@chakra-ui/react";

interface PageButtonProps {
  number: number;
  isActive: boolean;
}

export const PageButton = ({ number, isActive }: PageButtonProps) => {
  const pageButtonProps = isActive
    ? {
        bg: "pink.500",
        cursor: "default",
      }
    : {
        bg: "gray.700",
        cursor: "pointer",
      };

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      disabled
      _disabled={pageButtonProps}
    >
      {number}
    </Button>
  );
};
