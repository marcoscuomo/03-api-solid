import { expect, describe, it, beforeEach } from 'vitest'
import { hash } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { AuthenticateUseCase } from './authenticate'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

describe('Authenticate Use Case', () => {
  let usersRepository: InMemoryUsersRepository
  let sut: AuthenticateUseCase

  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new AuthenticateUseCase(usersRepository)
  })

  it('Should be able to authenticate', async () => {
    const password = '123456'
    const email = 'john@example.com'

    await usersRepository.create({
      name: 'John Doe',
      email,
      password_hash: await hash(password, 6),
    })

    const { user } = await sut.execute({
      email,
      password,
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('Should not be able to authenticate with wrong email', async () => {
    const password = '123456'
    const email = 'john@example.com'

    await expect(() =>
      sut.execute({
        email,
        password,
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('Should not be able to authenticate with wrong password', async () => {
    const password = '123456'
    const email = 'john@example.com'

    await usersRepository.create({
      name: 'John Doe',
      email,
      password_hash: await hash(password, 6),
    })

    await expect(() =>
      sut.execute({
        email,
        password: 'wrong',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
