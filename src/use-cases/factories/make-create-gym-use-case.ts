import { CreateGymCase } from '../create-gym'
import { PrismaGymsRepositry } from '@/repositories/prisma/prisma-gyms-repository'

export function makeCreateGymUseCase() {
  const gymsRepository = new PrismaGymsRepositry()
  const useCase = new CreateGymCase(gymsRepository)

  return useCase
}
