import { expect, describe, it, beforeEach } from 'vitest'
import { hash } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { GetUserProfileUseCase } from './get-user-profile'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

describe('Get User Profile Use Case', () => {
  let usersRepository: InMemoryUsersRepository
  let sut: GetUserProfileUseCase

  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUserProfileUseCase(usersRepository)
  })

  it('Should be able to get user profile', async () => {
    const password = '123456'
    const email = 'john@example.com'
    const name = 'John Doe'

    const createdUser = await usersRepository.create({
      name,
      email,
      password_hash: await hash(password, 6),
    })

    const { user } = await sut.execute({
      userId: createdUser.id,
    })

    // expect(user.id).toEqual(expect.any(String))
    expect(user.name).toEqual(name)
  })

  it('Should not be able to get User profile with wrong id', async () => {
    await expect(() =>
      sut.execute({
        userId: 'wrong-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
