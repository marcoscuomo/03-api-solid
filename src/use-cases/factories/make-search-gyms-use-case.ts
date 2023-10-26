import { SearchGymsUseCase } from '../search-gyms'
import { PrismaGymsRepositry } from '@/repositories/prisma/prisma-gyms-repository'

export function makeSearchGymsUseCase() {
  const gymsRepository = new PrismaGymsRepositry()
  const useCase = new SearchGymsUseCase(gymsRepository)

  return useCase
}
