import React from "react";
import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 23px;
  width: 23px;
  border: 1px solid grey;
  text-align: center;
  cursor: pointer;
`;

interface Props {
  value: string;
  click: any;
}

export function Cell({ value, click }: Props) {
  return <StyledContainer onClick={click}>{value}</StyledContainer>;
}
