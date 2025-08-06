import React from "react";
import * as S from "./styled";
import { GlobalStyle } from "../globalstyles";
import { BaseWrapper } from "../baseWrapper";
export interface PageProps {
  title: string;
  children: string;
}
export const Page = ({ title, children }: PageProps) => {
  return (
    <BaseWrapper>
      <S.Container>
        <h1>{title}</h1>
        {children}
      </S.Container>
    </BaseWrapper>
  );
};
