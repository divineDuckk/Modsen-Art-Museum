import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import { GlobalStyles, theme } from './theme';

describe('App', () => {
  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(true).toBeTruthy();
  });
  it('button home in DOM', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );
    const buttonHome = screen.queryByText(/home/i);
    expect(buttonHome).toBeNull();
  });
  it('li in DOM', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );
    const li1 = screen.getByText(/title alphabetically/i);
    const li2 = screen.getByText(/artist alphabetically/i);
    expect(li1).toBeInTheDocument();
    expect(li2).toBeInTheDocument();
  });
  it('to click fav ', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );
    const favButton = screen.getByTestId('to_fav_page');
    expect(screen.queryByText(/Here Are Your/i)).toBeNull();
    fireEvent.click(favButton);
    expect(screen.queryByText(/Here Are Your/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('to_home_page'));
  });
  it('to click home ', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );
    const favButton = screen.getByTestId('to_fav_page');
    expect(screen.queryByText("Let's Find Some Here!")).toBeInTheDocument();
    fireEvent.click(favButton);
    expect(screen.queryByText("Let's Find Some Here!")).toBeNull();
    fireEvent.click(screen.getByTestId('to_home_page'));
    expect(screen.queryByText("Let's Find Some Here!")).toBeInTheDocument();
  });
  it('input event', async () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );
    const input = screen.getByTestId('input_value') as HTMLInputElement;
    expect(screen.queryByTestId('error_input')).toBeNull();
    expect(input.value).toBe('');
    await userEvent.type(input, 'something');
    expect(input.value).toBe('something');
  });
  it('drop menu', async () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );
    const dropmenu = screen.getByTestId('drop_menu');
    const dropmenuButton = screen.getByTestId('show_drop');
    await userEvent.click(dropmenuButton);
    expect(dropmenu).toBeVisible();
    await userEvent.click(dropmenuButton);
  });
  it('to click footer logo ', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );
    const footer_logo = screen.getByTestId('footer_logo');
    const favButton = screen.getByTestId('to_fav_page');
    expect(screen.queryByText("Let's Find Some Here!")).toBeInTheDocument();
    fireEvent.click(favButton);
    expect(screen.queryByText("Let's Find Some Here!")).toBeNull();
    fireEvent.click(footer_logo);
    expect(screen.queryByText("Let's Find Some Here!")).toBeInTheDocument();
  });
  it('prev switcher button in dom', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );
    const btns = screen.getAllByTestId('SwitcherButton');
    expect(btns[0]).toBeInTheDocument();
  });
  it('prev switcher button visibility', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );
    const btns = screen.getAllByTestId('SwitcherButton');
    expect(btns[0]).toBeInTheDocument();
    fireEvent.click(btns[1]);
    fireEvent.click(btns[1]);
    fireEvent.click(btns[1]);
    fireEvent.click(btns[1]);
    fireEvent.click(btns[1]);
    expect(btns[0]).toBeVisible();
  });
});
