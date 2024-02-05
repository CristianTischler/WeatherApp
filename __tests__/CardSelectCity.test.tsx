import { render, screen } from "@testing-library/react";
import { CardSelectCity } from "@/components";
import { M_City } from "@/models";
import userEvent from "@testing-library/user-event";

describe("CardSelectCity", () => {
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
      <CardSelectCity
        cities={cities}
        onSelect={(value: M_City) => (citySelected = value)}
        citySelected={citySelected}
      />
    );
    const cardSelectCity = screen.getByTestId("selected-option-div");
    expect(cardSelectCity).toBeInTheDocument();
  });

  it("should change select value", async () => {
    render(
      <CardSelectCity
        cities={cities}
        onSelect={(value: M_City) => (citySelected = value)}
        citySelected={citySelected}
      />
    );
    const cardSelectCity = screen.getByTestId("selected-option-div");
    const optionElement = screen.getByTestId("option-Nueva York");
    await userEvent.click(optionElement);
    expect(citySelected).toEqual(cities[1]);
    expect(cardSelectCity).toHaveTextContent("Nueva York");
  });
});
