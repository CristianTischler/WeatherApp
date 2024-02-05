import { render, screen } from "@testing-library/react";
import { ConstantsTest } from "../__mocks__/ConstantsToTest";
import { CardDay } from "../src/components/CardDay";

describe("CardDay", () => {
  afterEach(jest.clearAllMocks);
  it("should render the component", () => {
    render(<CardDay day={ConstantsTest.daily[0]} />);
    const cardDay = screen.getByText(/Domingo 4/i);
    const cardDayIcon = screen.getByAltText(/Weather icon/i);
    const cardDayMaxTemp = screen.getByText(/29.4 °C/i);
    const cardDayMinTemp = screen.getByText(/20.3 °C/i);

    expect(cardDay).toBeInTheDocument();
    expect(cardDayIcon).toBeInTheDocument();
    expect(cardDayMaxTemp).toBeInTheDocument();
    expect(cardDayMinTemp).toBeInTheDocument();
  });
});
