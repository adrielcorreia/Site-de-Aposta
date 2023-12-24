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
        base: "bg-primary",
        content: "text-white",
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
          base: `
            bg-white
            rounded-full
            shadow-md
            ${isSelected ? "bg-primary" : ""}
            ${styles.base()}
            ${isHovered ? "opacity-80" : ""}
          `,
          content: `
            text-bold
            text-center
            ${styles.content()}
          `,
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
