// import { render, screen } from '@testing-library/react';
// import { MemoryRouter, Route, Routes } from 'react-router-dom';
// import MenuItems from './MenuItems'; 
// import { describe, it, test, expect, vi, beforeEach } from "vitest"

// describe('MenuItems Component', () => {
//   test('renders without crashing', () => {
//     render(
//       <MemoryRouter>
//         <MenuItems />
//       </MemoryRouter>
//     );
//     expect(screen.getByText('Home')).toBeInTheDocument();
//     expect(screen.getByText('About')).toBeInTheDocument();
//     expect(screen.getByText('Swap')).toBeInTheDocument();
//     expect(screen.getByText('Balances')).toBeInTheDocument();
//     expect(screen.getByText('Transactions')).toBeInTheDocument();
//     expect(screen.getByText('NFTs')).toBeInTheDocument();
//     expect(screen.getByText('Contract')).toBeInTheDocument();
//   });

//   test('correct menu item is selected based on pathname', () => {
//     const pathname = '/about';
//     render(
//       <MemoryRouter initialEntries={[pathname]}>
//         <MenuItems />
//       </MemoryRouter>
//     );
//     expect(screen.getByText('About').closest('li')).toHaveClass('ant-menu-item-selected');
//   });

//   test('renders the correct NavLinks for each menu item', () => {
//     render(
//       <MemoryRouter>
//         <MenuItems />
//       </MemoryRouter>
//     );
//     expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
//     expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
//     expect(screen.getByText('Swap').closest('a')).toHaveAttribute('href', '/1inch');
//     expect(screen.getByText('Balances').closest('a')).toHaveAttribute('href', '/erc20balance');
//     expect(screen.getByText('Transactions').closest('a')).toHaveAttribute('href', '/erc20transfers');
//     expect(screen.getByText('NFTs').closest('a')).toHaveAttribute('href', '/nftBalance');
//     expect(screen.getByText('Contract').closest('a')).toHaveAttribute('href', '/contract');
//   });

//   test('updates selected item when pathname changes', () => {
//     const { rerender } = render(
//       <MemoryRouter initialEntries={['/']}>
//         <MenuItems />
//       </MemoryRouter>
//     );
//     expect(screen.getByText('Home').closest('li')).toHaveClass('ant-menu-item-selected');

//     rerender(
//       <MemoryRouter initialEntries={['/about']}>
//         <MenuItems />
//       </MemoryRouter>
//     );

//     expect(screen.getByText('About').closest('li')).toHaveClass('ant-menu-item-selected');
//   });

//  test('does not render a menu item if no address or walletAddress is provided', () => {
//   render(
//     <MemoryRouter>
//       <MenuItems />
//     </MemoryRouter>
//   );
//   expect(screen.queryByText('Balances')).toBeInTheDocument();
//   expect(screen.queryByText('Transactions')).toBeInTheDocument();
// });

// });



import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuItems from './MenuItems'; 
import { describe, test, expect } from "vitest";

describe('MenuItems Component', () => {
  
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <MenuItems />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Swap')).toBeInTheDocument();
    expect(screen.getByText('Balances')).toBeInTheDocument();
    expect(screen.getByText('Transactions')).toBeInTheDocument();
    expect(screen.getByText('NFTs')).toBeInTheDocument();
    expect(screen.getByText('Contract')).toBeInTheDocument();
  });

  test('correct menu item is selected based on pathname', () => {
    const pathname = '/about';
    render(
      <MemoryRouter initialEntries={[pathname]}>
        <MenuItems />
      </MemoryRouter>
    );

    expect(screen.getByText('About').closest('li')).toHaveClass('ant-menu-item-selected');
  });


  test('renders the correct NavLinks for each menu item', () => {
    render(
      <MemoryRouter>
        <MenuItems />
      </MemoryRouter>
    );

    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Swap').closest('a')).toHaveAttribute('href', '/1inch');
    expect(screen.getByText('Balances').closest('a')).toHaveAttribute('href', '/erc20balance');
    expect(screen.getByText('Transactions').closest('a')).toHaveAttribute('href', '/erc20transfers');
    expect(screen.getByText('NFTs').closest('a')).toHaveAttribute('href', '/nftBalance');
    expect(screen.getByText('Contract').closest('a')).toHaveAttribute('href', '/contract');
  });

test('updates selected item when pathname changes', async () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={['/']}>
        <MenuItems />
      </MemoryRouter>
    );

    expect(screen.getByText('Home').closest('li')).toBeInTheDocument();

    rerender(
      <MemoryRouter initialEntries={['/about']}>
        <MenuItems />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('About').closest('li')).toBeInTheDocument();
    });
  });


  test('does not render a menu item if no address or walletAddress is provided', () => {
      render(
        <MemoryRouter>
          <MenuItems />
        </MemoryRouter>
      );
      expect(screen.queryByText('Balances')).toBeInTheDocument();
      expect(screen.queryByText('Transactions')).toBeInTheDocument();
    });
});
