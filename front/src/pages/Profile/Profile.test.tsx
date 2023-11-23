import { render, screen, waitFor } from "@testing-library/react"
import Profile from "./Profile"
import { UserApi } from "../../api";
import { User } from "../../../../back/models";

jest.mock('../../api')

describe('<Profile />', () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should render div with testid "no-user" if no user', async () => {
    jest.spyOn(UserApi, 'getMe').mockResolvedValue(null);
    
    render(<Profile />);

    expect(screen.queryByTestId('user')).not.toBeInTheDocument();
    expect(screen.getByTestId('no-user')).toBeInTheDocument();
  })

  it('should render div with testid "no-user" if request failed', async () => {
    jest.spyOn(UserApi, 'getMe').mockRejectedValue('ERROR');

    render(<Profile />);

    await waitFor(() => {
      expect(screen.queryByTestId('user')).not.toBeInTheDocument();
    })

    expect(screen.getByTestId('no-user')).toBeInTheDocument();
  })

  it('should render div with testid "user"', async () => {
    const mockUser: User = {
      id: 1,
      name: 'Иван',
      surname: 'Иванов',
      patronymic: 'Иванович',
      createdAt: new Date(),
      updatedAt: null,
    }

    jest.spyOn(UserApi, 'getMe').mockResolvedValue(mockUser);
    
    render(<Profile />);

    await waitFor(() => expect(screen.queryByTestId('no-user')).not.toBeInTheDocument())
    expect(screen.getByTestId('user')).toBeInTheDocument();
  })

  it('should render div with user data without patronymic', async () => {
    const mockUser: User = {
      id: 1,
      name: 'Иван',
      surname: 'Иванов',
      patronymic: null,
      createdAt: new Date(),
      updatedAt: null,
    }

    jest.spyOn(UserApi, 'getMe').mockResolvedValue(mockUser);

    render(<Profile />);  

    await waitFor(() => {
      expect(screen.getByText(`Фамилия: ${mockUser.surname}`)).toBeInTheDocument()
    })
    expect(screen.getByText(`Имя: ${mockUser.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Отчество: отсутствует`)).toBeInTheDocument();
  })

  it('should render div with user data with patronymic', async () => {
    const mockUser: User = {
      id: 1,
      name: 'Иван',
      surname: 'Иванов',
      patronymic: 'Иванович',
      createdAt: new Date(),
      updatedAt: null,
    }

    jest.spyOn(UserApi, 'getMe').mockResolvedValue(mockUser);

    render(<Profile />);

    await waitFor(() => {
      expect(screen.getByText(`Фамилия: ${mockUser.surname}`)).toBeInTheDocument()
    })
    expect(screen.getByText(`Имя: ${mockUser.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Отчество: ${mockUser.patronymic}`)).toBeInTheDocument();
  })
})