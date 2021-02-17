import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";

import { Cell } from "./Cell";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Screen = styled.div`
  width: 92px;
  height: 30px;
  border: 1px solid grey;
  padding: 5px;
`;
interface Props extends RouteComponentProps {}

export function HomePage(props: Props) {
  let [screen, setScreen] = useState("");
  let [op, setOp] = useState("");
  let [newScreen, setNewScreen] = useState(false);
  let [cacheSum, setCacheSum] = useState("");

  let handleClick = (e: any) => {
    console.log(e.target.innerText);
    let val = e.target.innerText;
    if ("0123456789".includes(val)) {
      if (newScreen) {
        setScreen(val);
        setNewScreen(false);
      } else {
        setScreen(screen + val);
      }
    } else if ("+-*/".includes(val)) {
      setOp(val);
      setCacheSum(screen);
      setNewScreen(true);
    } else if ("En".includes(val)) {
      let sum;
      switch (op) {
        case "+":
          sum = Number(cacheSum) + Number(screen);
          break;
        case "-":
          sum = Number(cacheSum) - Number(screen);
          break;
        case "*":
          sum = Number(cacheSum) * Number(screen);
          break;
        case "/":
          sum = Number(cacheSum) / Number(screen);
          break;
      }
      setScreen(String(sum));
      setCacheSum(String(sum));
    } else if ("C".includes(val)) {
      setScreen("");
      setCacheSum("");
    }
  };
  return (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <Screen>{screen}</Screen>
      <Row>
        <Cell click={handleClick} value="1" />
        <Cell click={handleClick} value="2" />
        <Cell click={handleClick} value="3" />
        <Cell click={handleClick} value="+" />
      </Row>
      <Row>
        <Cell click={handleClick} value="4" />
        <Cell click={handleClick} value="5" />
        <Cell click={handleClick} value="6" />
        <Cell click={handleClick} value="-" />
      </Row>
      <Row>
        <Cell click={handleClick} value="7" />
        <Cell click={handleClick} value="8" />
        <Cell click={handleClick} value="9" />
        <Cell click={handleClick} value="*" />
      </Row>
      <Row>
        <Cell click={handleClick} value="" />
        <Cell click={handleClick} value="0" />
        <Cell click={handleClick} value="" />
        <Cell click={handleClick} value="/" />
      </Row>
      <Row>
        <Cell click={handleClick} value="" />
        <Cell click={handleClick} value="" />
        <Cell click={handleClick} value="C" />
        <Cell click={handleClick} value="En" />
      </Row>
    </div>
  );
}
