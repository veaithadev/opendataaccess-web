import { render } from "@testing-library/react";

import Header from "./header";

describe("Header", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Header appName="Open Data Access" />);
    expect(baseElement).toBeTruthy();
  });
});
