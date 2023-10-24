import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

describe('Register Use Case', () => {
  let usersRepository: InMemoryUsersRepository
  let sut: RegisterUseCase

  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new RegisterUseCase(usersRepository)
  })

  it('Should hash user password upon registration', async () => {
    const password = '123456'

    const { user } = await sut.execute({
      name: 'John Doe',
      email: 'john.doe2@gmail.com',
      password,
    })

    const isPasswordCorrectlyHashed = await compare(
      password,
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('Should not be albe to register with same email twice', async () => {
    const password = '123456'
    const email = 'john.doe@gmail.com'

    await sut.execute({
      name: 'John Doe',
      email,
      password,
    })

    await expect(() =>
      sut.execute({
        name: 'John Doe',
        email,
        password,
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })

  it('Should be able to register', async () => {
    const password = '123456'

    const { user } = await sut.execute({
      name: 'John Doe',
      email: 'john.doe2@gmail.com',
      password,
    })

    expect(user.id).toEqual(expect.any(String))
  })
})
