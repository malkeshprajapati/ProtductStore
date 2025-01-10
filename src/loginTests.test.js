import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage";

jest.mock("./htttpClient");

describe("LoginPage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders login form", () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    expect(getByPlaceholderText(/Enter username/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Enter password/i)).toBeInTheDocument();
    expect(getByText(/Welcome, Login/i)).toBeInTheDocument();
  });

  test("submits form", async () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText(/Enter username/i), {
      target: { value: "emilys" },
    });
    fireEvent.change(getByPlaceholderText(/Enter password/i), {
      target: { value: "emilyspass" },
    });
  });
});
