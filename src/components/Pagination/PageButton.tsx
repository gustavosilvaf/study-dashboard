import { Button } from "@chakra-ui/react";

interface PageButtonProps {
  number: number;
  isActive: boolean;
}

export const PageButton = ({ number, isActive }: PageButtonProps) => {
  const pageButtonProps = isActive
    ? {
        colorScheme: "pink",
        disabled: true,
        _disabled: {
          bg: "pink.500",
          cursor: "default",
        },
      }
    : {
        bg: "gray.700",
        _hover: {
          bg: "gray.500",
          cursor: "pointer",
        },
      };

  return (
    <Button size="sm" fontSize="xs" width="4" {...pageButtonProps}>
      {number}
    </Button>
  );
};
