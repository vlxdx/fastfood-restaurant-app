import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Getraenke from '.';

const items = [{ Name: 'Cola', Kcal: 95, Preis: 1.5 }];

describe('Getraenke component', () => {
  test('renders without crashing with empty items', () => {
    render(<Getraenke items={[]} addToCart={jest.fn()} />);
    expect(screen.getByText('Getränke')).toBeInTheDocument();
    expect(screen.getByText('Wählen Sie Ihr Getränk')).toBeInTheDocument();
    expect(screen.getByText('Auswahl:')).toBeInTheDocument();
  });

  test('renders correctly with given item', () => {
    render(<Getraenke items={items} addToCart={jest.fn()} />);
    expect(screen.getByText('Cola')).toBeInTheDocument();
    expect(screen.getByText('95 Kcal')).toBeInTheDocument();
    expect(screen.getByText('1.50 EUR')).toBeInTheDocument();
  });

  test('calls addToCart when Hinzufügen button is clicked', () => {
    const addToCart = jest.fn();
    render(<Getraenke items={items} addToCart={addToCart} />);

    const addButton = screen.getAllByText('Hinzufügen')[0];
    fireEvent.click(addButton);

    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toHaveBeenCalledWith(items[0]);
  });
});
