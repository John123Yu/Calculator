import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 38px;
`;

interface Props extends RouteComponentProps {}

export function HomePage(props: Props) {
  useEffect(() => {
    const fetchData = async () => {
      const [] = await Promise.all([]);
    };
    fetchData();
  }, []);

  return (
    <>
      <StyledContainer>Hello World</StyledContainer>
    </>
  );
}
