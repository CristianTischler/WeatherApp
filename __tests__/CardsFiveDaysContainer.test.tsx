import { render, screen } from "@testing-library/react";
import { ConstantsTest } from "../__mocks__/ConstantsToTest";
import { CardsFiveDaysContainer } from "@/components";

describe("CardsFiveDaysContainer", () => {
  afterEach(jest.clearAllMocks);
  it("should render the component", () => {
    render(
      <CardsFiveDaysContainer days={ConstantsTest.daily} loading={false} />
    );
    const cardDay1 = screen.getByText(/Lunes 5/i);
    const cardDay2 = screen.getByText(/Martes 6/i);
    const cardDay3 = screen.getByText(/Miércoles 7/i);
    const cardDay4 = screen.getByText(/Jueves 8/i);
    const cardDay5 = screen.getByText(/Viernes 9/i);

    expect(cardDay1).toBeInTheDocument();
    expect(cardDay2).toBeInTheDocument();
    expect(cardDay3).toBeInTheDocument();
    expect(cardDay4).toBeInTheDocument();
    expect(cardDay5).toBeInTheDocument();

    screen.getAllByRole("img", { name: /Weather icon/i }).forEach((icon) => {
      expect(icon).toBeInTheDocument();
    });
  });
});
