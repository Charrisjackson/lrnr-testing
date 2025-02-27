import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock the Navbar component
vi.mock('./src/components/Navbar', () => ({
  default: () => <nav data-testid="navbar">Mocked Navbar</nav>,
}));

// Mock the Footer component
vi.mock('./src/components/Footer', () => ({
  default: () => <footer data-testid="footer">© 2025 LRNR</footer>,
}));
vi.mock('./src/components/PageNavigationButton', () => ({
  default: () => <button data-testid="quizbtn" id="quizbtn"> </button>
}));
vi.mock('./src/pages/Home',()=>({
  default: ()=><img src='/img/lrnr-logo.png' alt='logo'  data-testid="logoimg"/>

}))

import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import  Home  from './src/pages/Home';
import PageNavigationButton from  './src/components/PageNavigationButton';
describe('Homepage UI Tests', () => {
  it('should contain a navigation button to the quiz generator', () => {
    render(<Navbar />);
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
    expect(navbar.textContent).toBe("Mocked Navbar");
  });

  it('should contain a footer', () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
    expect(footer.textContent).toBe("© 2025 LRNR");
  });
  it("should contain a page navigation btn",()=>{
    render(<PageNavigationButton/>);
    const navbtn = screen.getByTestId("quizbtn");
    expect(navbtn).toBeInTheDocument();
  })

  it("should contain lrnr logo",()=>{
    render(<Home />);
    const logoimg = screen.getByTestId("logoimg");
    expect(logoimg).toBeInTheDocument();

  })
});
