import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { App } from "App";
import { AuthServiceType } from "services/AuthService";

describe("App", () => {
  it("routes to login page without auth", async () => {
    const authServiceFake: AuthServiceType = {
      isAuth: () => Promise.resolve(false),
    };

    let app: RenderResult = render(<App authService={authServiceFake} />);
    app.queryAllByText("Login");
  });
});
