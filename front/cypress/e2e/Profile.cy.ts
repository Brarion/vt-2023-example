/// <reference types="cypress" />

describe('<Profile />', () => {
  it('should render div with testid "no-user" if no user', () => {    
    cy.intercept(
      {
        method: 'GET',
        url: '/api/user',
      },
      {
        statusCode: 200,
        body: null,
      }
    )
    
    cy.visit('http://localhost:3000/me');

    cy.get('[data-testid=no-user]').contains('Пользователя нет');
    cy.get('[data-testid=user]').should('not.exist');

    cy.screenshot()
    cy.end()
  })

  it('should render div with testid "no-user" if request failed', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '/api/user',
      },
      {
        statusCode: 404,
        body: null,
        headers: {
          'x-not-found': 'true',
        },
      }
    )
    
    cy.visit('http://localhost:3000/me')

    cy.get('[data-testid=no-user]').contains('Пользователя нет');
    cy.get('[data-testid=user]').should('not.exist');

    cy.screenshot()
    cy.end()
  })

  it('should render div with testid "user"', () => {
    const mockUser = {
      id: 1,
      name: 'Иван',
      surname: 'Иванов',
      patronymic: 'Иванович',
      createdAt: new Date(),
      updatedAt: null,
    }

    cy.intercept(
      {
        method: 'GET',
        url: '/api/user',
      },
      {
        statusCode: 200,
        body: mockUser,
      }
    )
    
    cy.visit('http://localhost:3000/me')

    cy.get('[data-testid=no-user]').should('not.exist')
    cy.get('[data-testid=user]').should('exist');

    cy.screenshot()
    cy.end()
  })

  it('should render div with user data without patronymic', async () => {
    const mockUser = {
      id: 1,
      name: 'Иван',
      surname: 'Иванов',
      patronymic: null,
      createdAt: new Date(),
      updatedAt: null,
    }

    cy.intercept(
      {
        method: 'GET',
        url: '/api/user',
      },
      {
        statusCode: 200,
        body: mockUser,
      }
    )
    
    cy.visit('http://localhost:3000/me')

    cy.get('[data-testid=user] > p:first-child').contains(`Фамилия: ${mockUser.surname}`)
    cy.get('[data-testid=user] > p:nth-child(2)').contains(`Имя: ${mockUser.name}`)
    cy.get('[data-testid=user] > p:last-child').contains(`Отчество: отсутствует`)

    cy.screenshot()
    cy.end()
  })

  it('should render div with user data with patronymic', async () => {
    const mockUser = {
      id: 1,
      name: 'Иван',
      surname: 'Иванов',
      patronymic: 'Иванович',
      createdAt: new Date(),
      updatedAt: null,
    }

    cy.intercept(
      {
        method: 'GET',
        url: '/api/user',
      },
      {
        statusCode: 200,
        body: mockUser,
      }
    )
    
    cy.visit('http://localhost:3000/me')

    cy.get('[data-testid=user] > p:first-child').contains(`Фамилия: ${mockUser.surname}`)
    cy.get('[data-testid=user] > p:nth-child(2)').contains(`Имя: ${mockUser.name}`)
    cy.get('[data-testid=user] > p:last-child').contains(`Отчество: ${mockUser.patronymic}`)

    cy.screenshot()
    cy.end()
  })
})