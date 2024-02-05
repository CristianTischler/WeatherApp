import { render, screen } from "@testing-library/react";
import { CustomDropdown } from "@/components";
import { M_City } from "@/models";
import userEvent from "@testing-library/user-event";

describe("CustomDropdown", () => {
  afterEach(jest.clearAllMocks);
  const cities = [
    {
      name: "Buenos Aires",
      long: -58.3816,
      lat: -34.6037,
    },
    {
      name: "Nueva York",
      long: -74.006,
      lat: 40.7128,
    },
  ];
  let citySelected = cities[0];
  it("should render the component", () => {
    render(
      <CustomDropdown
        options={cities}
        onSelect={(value: M_City) => (citySelected = value)}
        selected={citySelected}
      />
    );
    const customDropdown = screen.getByTestId("selected-option-div");
    expect(customDropdown).toBeInTheDocument();
  });
  it("should change select value", async () => {
    render(
      <CustomDropdown
        options={cities}
        onSelect={(value: M_City) => (citySelected = value)}
        selected={citySelected}
      />
    );
    const cardSelectCity = screen.getByTestId("selected-option-div");
    const optionElement = screen.getByTestId("option-Nueva York");
    await userEvent.click(optionElement);
    expect(citySelected).toEqual(cities[1]);
    expect(cardSelectCity).toHaveTextContent("Nueva York");
  });
});
