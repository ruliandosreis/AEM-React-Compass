import React from "react";
import { Paragraph } from "./style";

export const CustomText = ({ fontSize, color, weight, margin, family, text, textAlign }) => {
  return (
    <Paragraph
      fontSize={`${fontSize}px`}
      family={family}
      color={color}
      weight={weight}
      margin={`${margin}px`}
      textAlign={textAlign}
    >
      {text}
    </Paragraph>
  );
};