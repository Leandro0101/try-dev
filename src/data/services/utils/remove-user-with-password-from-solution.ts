import { TReturnStarDTO } from '../../dtos'
import { userWithoutPassword } from './user-without-password'
import { ISolutionEntity } from '../../../domain/entities/solution'
import { IStarEntity } from '../../../domain/entities/star'

type TStarWithoutSolution = Omit<IStarEntity, 'solution'>

export const removeUserWithPasswordFromSolution =
(solution: ISolutionEntity, star: TStarWithoutSolution): TReturnStarDTO => {
  const { user, ...solutionWithoutUser } = solution

  const newStar = Object.assign(star,
    {
      solution: solutionWithoutUser,
      user: userWithoutPassword(user)
    })

  return newStar
}
