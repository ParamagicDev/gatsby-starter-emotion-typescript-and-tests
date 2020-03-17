import React from "react";
import { render } from "@testing-library/react";

import data from "Fixtures/layout-fixture";
import { PureLayout as Layout } from "~components/layout";

describe("Layout component", () => {
  test("Should render without error", () => {
    const { asFragment, debug } = render(<Layout data={data} />);
  });
});
