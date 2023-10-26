import { FetchNearbyGymsUseCase } from '../fetch-nearby-gyms'
import { PrismaGymsRepositry } from '@/repositories/prisma/prisma-gyms-repository'

export function makeFetchNearbyGymUseCase() {
  const gymsRepository = new PrismaGymsRepositry()
  const useCase = new FetchNearbyGymsUseCase(gymsRepository)

  return useCase
}
