import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByTestId('Checkout Form');

    expect(header).toBeInTheDocument;
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByTestId('firstName');
    const lastNameInput = screen.getByTestId('lastName');
    const addressInput = screen.getByTestId('address');
    const cityInput = screen.getByTestId('city');
    const stateInput = screen.getByTestId('state');
    const zipInput = screen.getByTestId('zip');

    fireEvent.change(firstNameInput, {target: {value: 'Mark'}});
    fireEvent.change(lastNameInput, {target: {value: 'Hillin'}});
    fireEvent.change(addressInput, {target: {value: '123 Main St'}});
    fireEvent.change(cityInput, {target: {value: 'St Louis'}});
    fireEvent.change(stateInput, {target: {value: 'Missouri'}});
    fireEvent.change(zipInput, {target: {value: '63010'}});

    expect(firstNameInput).toHaveValue('Mark');
    expect(lastNameInput).toHaveValue('Hillin');
    expect(addressInput).toHaveValue('123 Main St');
    expect(cityInput).toHaveValue('St Louis');
    expect(stateInput).toHaveValue('Missouri');
    expect(zipInput).toHaveValue('63010');

    const button = screen.getByTestId('button');
    fireEvent.click(button);

    const success = screen.getByTestId(/successMessage/i);
    expect(success).toBeInTheDocument;
});
