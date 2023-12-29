'use client'

import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";

const checkbox = tv({
  slots: {
    content: "text-default-500",
  },
  variants: {
    isSelected: {
      true: {
        content: "text-black font-bold", // Adiciona negrito ao texto quando selecionado
      },
      false: {
        content: "text-black font-bold", // Mantém o texto em negrito quando não selecionado
      },
    }
  },
});

export function CustomCheckbox({ label, ...props }) {
  const { isSelected, isHovered, getBaseProps, getLabelProps, getInputProps } = useCheckbox({
    ...props,
  });

  const styles = checkbox({ isSelected });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: `
            bg-white
            border-white
            rounded-full
            shadow-md
            ${isSelected ? "bg-primary border-primary" : ""}
            ${isHovered ? "opacity-80" : ""}
            rounded-full
            w-[48px]
            h-[48px]
          `,
          content: `
            text-center
            ${isSelected ? "text-black font-bold" : "text-black font-bold"} // Mantém o texto em negrito quando não selecionado
            ${styles.content()}
            font-size: 16px;
            line-height: 1.5;
            flex items-center justify-center;
          `,
        }}
        color="primary"
        variant="faded"
        style={{ flexDirection: "column" }}
        {...getLabelProps()}
      >
        {label.padStart(2, '0')}
      </Chip>
    </label>
  );
};
