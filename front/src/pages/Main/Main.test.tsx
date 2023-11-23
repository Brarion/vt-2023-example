/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react"
import Main from "./Main"
import userEvent from "@testing-library/user-event";

describe('<Main />', () => {
  it('should render div with testid "main"', () => {
    render(<Main />);

    expect(screen.getByTestId('main')).toBeInTheDocument();
  })

  it('should render div with testid "main" and 2 children', () => {
    render(<Main />);

    expect(screen.getByTestId('main').children.length).toBe(2);
    expect(screen.getByTestId('main').children[0]).toBeInTheDocument()
    expect(screen.getByTestId('main').children[1]).toBeInTheDocument()
  })
  
  it('should render div with testid "main" and <p/> with 0', () => {
    render(<Main />);

    expect(screen.getByTestId('main').children[1]).toHaveTextContent('0')
  })
  
  it('should render div with testid "main" and <p/> with 1 after 1 click on button', async () => {
    render(<Main />);

    userEvent.click(screen.getByTestId('main').children[0])

    expect(screen.getByTestId('main').children[1]).toHaveTextContent('1')
  })
  
  it('should render div with testid "main" and <p/> with 10 after 10 click on button', async () => {
    render(<Main />);

    userEvent.click(screen.getByTestId('main').children[0])
    userEvent.click(screen.getByTestId('main').children[0])
    userEvent.click(screen.getByTestId('main').children[0])
    userEvent.click(screen.getByTestId('main').children[0])
    userEvent.click(screen.getByTestId('main').children[0])
    userEvent.click(screen.getByTestId('main').children[0])
    userEvent.click(screen.getByTestId('main').children[0])
    userEvent.click(screen.getByTestId('main').children[0])
    userEvent.click(screen.getByTestId('main').children[0])
    userEvent.click(screen.getByTestId('main').children[0])

    expect(screen.getByTestId('main').children[1]).toHaveTextContent('10')
  })
})