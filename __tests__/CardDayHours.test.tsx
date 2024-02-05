import { fireEvent, render, screen } from "@testing-library/react";
import { ConstantsTest } from "../__mocks__/ConstantsToTest";
import { CardDayHours } from "../src/components/CardDayHours";
import { formatSpanishDate } from "@/utils";

describe("CardDayHours", () => {
  afterEach(jest.clearAllMocks);
  it("should render the component", () => {
    render(<CardDayHours hours={ConstantsTest.hourly} />);
    const cardDayHours = screen.getByText(/Domingo 4/i);
    const cardDayHoursIcon = screen.getByAltText(/Weather icon/i);
    const cardDayHoursTemp = screen.getByText(/21.8 °C/i);
    const cardDayHoursHumidity = screen.getByText(/56 %/i);

    expect(cardDayHours).toBeInTheDocument();
    expect(cardDayHoursIcon).toBeInTheDocument();
    expect(cardDayHoursTemp).toBeInTheDocument();
    expect(cardDayHoursHumidity).toBeInTheDocument();
  });

  it("should change slider value", async () => {
    render(<CardDayHours hours={ConstantsTest.hourly} />);
    const hourSlider = screen.getByRole("slider");
    fireEvent.change(hourSlider, { target: { value: "12" } });
    expect(hourSlider).toHaveValue("12");
    const cardDayHours = screen.getByTestId("hourTag");
    const formatedHour = formatSpanishDate(ConstantsTest.hourly[12].dt);
    expect(cardDayHours).toHaveTextContent(formatedHour.hour + ":00 hs");
  });
});
