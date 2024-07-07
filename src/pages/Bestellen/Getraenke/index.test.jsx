import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Getraenke from '.';

const items = [{ Name: 'Cola', Kcal: 95, Preis: 1.5 }];

const quantities = { Cola: 0 };

const mockAddToCart = jest.fn();
const mockIncreaseQuantity = jest.fn();
const mockDecreaseQuantity = jest.fn();
const mockHandleResetQuantity = jest.fn();

describe('Getraenke component', () => {
  test('renders without crashing with empty items', () => {
    render(<Getraenke items={[]} addToCart={jest.fn()} />);
    expect(screen.getByText('Getränke')).toBeInTheDocument();
    expect(screen.getByText('Wählen Sie Ihr Getränk')).toBeInTheDocument();
    expect(screen.getByText('Auswahl:')).toBeInTheDocument();
  });

  test('renders component with items', () => {
    render(
      <Getraenke
        items={items}
        addToCart={mockAddToCart}
        quantities={quantities}
        increaseQuantity={mockIncreaseQuantity}
        decreaseQuantity={mockDecreaseQuantity}
        handleResetQuantity={mockHandleResetQuantity}
      />
    );

    items.forEach((item) => {
      expect(screen.getByText(item.Name)).toBeInTheDocument();
      expect(screen.getByText(`${item.Kcal} Kcal`)).toBeInTheDocument();
      expect(
        screen.getByText(`Einzelpreis: ${item.Preis.toFixed(2)} EUR`)
      ).toBeInTheDocument();
    });
  });

  test('increases and decreases quantity', () => {
    render(
      <Getraenke
        items={items}
        addToCart={mockAddToCart}
        quantities={quantities}
        increaseQuantity={mockIncreaseQuantity}
        decreaseQuantity={mockDecreaseQuantity}
        handleResetQuantity={mockHandleResetQuantity}
      />
    );

    const increaseButton = screen.getAllByAltText('Plus')[0];
    fireEvent.click(increaseButton);
    expect(mockIncreaseQuantity).toHaveBeenCalledWith(items[0].Name);

    const decreaseButton = screen.getAllByAltText('Minus')[0];
    fireEvent.click(decreaseButton);
    expect(mockDecreaseQuantity).toHaveBeenCalledWith(items[0].Name);
  });
});
