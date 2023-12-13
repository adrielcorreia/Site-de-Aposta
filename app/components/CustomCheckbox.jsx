// CustomCheckbox.jsx
import React from "react";
import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";

const checkbox = tv({
  slots: {
    base: "border-default",
    content: "text-default-500",
  },
  variants: {
    isSelected: {
      true: {
        base: "bg-danger",
        content: "text-primary-foreground",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      },
    },
    isHovered: {
      true: {
        base: "hover:opacity-80",
      },
    },
  },
});

export const CustomCheckbox = ({ label, ...props }) => {
  const { isSelected, isFocusVisible, isHovered, getBaseProps, getLabelProps, getInputProps } = useCheckbox({
    ...props,
  });

  const styles = checkbox({ isSelected, isFocusVisible, isHovered });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: `${styles.base()} ${isHovered ? "opacity-80" : ""}`, // Adiciona a classe de hover
          content: styles.content(),
        }}
        color="primary"
        variant="faded"
        {...getLabelProps()}
      >
        {label}
      </Chip>
    </label>
  );
};
