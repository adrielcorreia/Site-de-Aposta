// CustomCheckbox.jsx
import React from "react";
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
    },
    isHovered: {
      true: {
        base: "hover:bg-opacity-80",
      },
    },
  },
});

export const CustomCheckbox = ({ label, ...props }) => {
  const { isSelected, isHovered, getBaseProps, getLabelProps, getInputProps } = useCheckbox({
    ...props,
  });

  const styles = checkbox({ isSelected, isHovered });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: `
            bg-white // Alterado para fundo completamente branco
            rounded-full
            shadow-md
            ${isSelected ? "bg-primary" : ""}
            ${isHovered ? "opacity-80" : ""}
            rounded-full // Adiciona a classe para tornar o botão circular
            w-[48px] // Largura definida para 48 pixels
            h-[48px] // Altura definida para 48 pixels
          `,
          content: `
            text-black // Torna o texto preto
            text-center
            ${styles.content()}
            font-size: 16px;
            line-height: 1.5;
            flex items-center justify-center; // Adiciona as classes para centralizar o conteúdo
          `,
        }}
        color="primary"
        variant="faded"
        style={{ flexDirection: "column" }} // Organiza verticalmente os botões
        {...getLabelProps()}
      >
        {label.padStart(2, '0')} {/* Garante dois dígitos, adicionando zero à esquerda, se necessário */}
      </Chip>
    </label>
  );
};
