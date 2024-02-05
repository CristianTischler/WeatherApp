import { fireEvent, render, screen } from "@testing-library/react";
import { ConstantsTest } from "../__mocks__/ConstantsToTest";
import { CardCurrentDay } from "@/components";
import { formatSpanishDate } from "@/utils";

describe("CardDay", () => {
  afterEach(jest.clearAllMocks);
  it("should render the component", () => {
    render(
      <CardCurrentDay
        currentDay={ConstantsTest.daily[0]}
        hours={ConstantsTest.hourly}
        loading={false}
      />
    );
    const cardDay = screen.getAllByText(/Domingo 4/);
    expect(cardDay).toHaveLength(2);

    const cardDayIcon = screen.getAllByRole("img", { name: /Weather icon/i });
    expect(cardDayIcon).toHaveLength(2);

    const hourSlider = screen.getByRole("slider");
    fireEvent.change(hourSlider, { target: { value: "12" } });
    expect(hourSlider).toHaveValue("12");

    const cardDayHours2 = screen.getByTestId("hourTag");
    const formatedHour = formatSpanishDate(ConstantsTest.hourly[12].dt);
    expect(cardDayHours2).toHaveTextContent(formatedHour.hour + ":00 hs");
  });
});
