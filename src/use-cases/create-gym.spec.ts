import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymCase } from './create-gym'

describe('Create Gym Use Case', () => {
  let gymRepository: InMemoryGymsRepository
  let sut: CreateGymCase

  beforeEach(() => {
    gymRepository = new InMemoryGymsRepository()
    sut = new CreateGymCase(gymRepository)
  })

  it('Should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'Javascript Gym',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
