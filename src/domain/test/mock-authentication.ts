import { Authentication } from '@/domain/usecases'
import faker from 'faker'
import { mockAccountModel } from '.'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAuthenticationModel = (): Authentication.Model => mockAccountModel()
