import React, { useEffect, useState } from "react";
import { Button, Box, Bar } from "./BurgerButton.styled";

export default function BurgerButton({
  isOpen: controlledIsOpen,
  onClick,
  ariaLabel = "Toggle menu",
}) {
  const [open, setOpen] = useState(Boolean(controlledIsOpen));

  useEffect(() => {
    if (controlledIsOpen !== undefined) setOpen(Boolean(controlledIsOpen));
  }, [controlledIsOpen]);

  const handleClick = (e) => {
    if (controlledIsOpen === undefined) setOpen((s) => !s);
    if (onClick) onClick(e);
  };

  return (
    <Button
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-expanded={open}
      data-open={open}
    >
      <Box>
        <Bar index={1} open={open} />
        <Bar index={2} open={open} />
        <Bar index={3} open={open} />
      </Box>
    </Button>
  );
}
