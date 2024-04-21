import { render, screen } from "@testing-library/react";
import Modale from "./Modale";

describe("component Modale", () => {
  test("does not render when not visible", () => {
    render(
      <Modale
        visible={false}
        onClose={() => {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const modale = screen.queryByTestId("modale");
    expect(modale).not.toBeInTheDocument();
  });

  test("renders correctly when visible", async () => {
    render(
      <Modale
        visible={true}
        onClose={() => {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const modale = await screen.findByTestId("modale");
    expect(modale).toBeInTheDocument();
  });

  test("close button is present when modal is open", () => {
    render(
      <Modale
        visible={true}
        onClose={() => {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const closeButton = screen.getByAltText("icône close");
    expect(closeButton).toBeInTheDocument();
  });

  test("user icon is present when modal is open", () => {
    render(
      <Modale
        visible={true}
        onClose={() => {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const userIcon = screen.getByAltText("icône user");
    expect(userIcon).toBeInTheDocument();
  });

  test("header 'Confirmation' is present when modal is open", () => {
    render(
      <Modale
        visible={true}
        onClose={() => {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const confirmationHeader = screen.getByText("Confirmation");
    expect(confirmationHeader).toBeInTheDocument();
  });

  test("renders children when modal is open", () => {
    const childContent = "This is the content";

    render(
      <Modale
        visible={true}
        onClose={() => {
          throw new Error("Function not implemented.");
        }}
      >
        {childContent}
      </Modale>
    );

    const childrenContent = screen.getByText(childContent);
    expect(childrenContent).toBeInTheDocument();
  });
});
