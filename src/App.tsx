import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

import { HomePage } from "./components/HomePage";

interface Props {}

export function App(props: Props) {
  let [user, setUser] = useState("user");

  useEffect(() => {
    const fetchAuth = async () => {
      setUser("user");
    };
    fetchAuth();
  }, []);

  return (
    <Router>
      <HomePage path="/" />
    </Router>
  );
}
