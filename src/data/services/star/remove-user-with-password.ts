import { TReturnStarDTO } from '../../dtos'
import { userWithoutPassword } from '../utils/user-without-password'
import { ISolutionEntity } from '../../../domain/entities/solution'
import { IStarEntity } from '../../../domain/entities/star'

type TStarWithoutSolution = Omit<IStarEntity, 'solution'>

export const removeUserWithPassword =
(solution: ISolutionEntity, star: TStarWithoutSolution): TReturnStarDTO => {
  const { user, ...solutionWithoutUser } = solution

  const newStar = Object.assign(star,
    {
      solution: solutionWithoutUser,
      user: userWithoutPassword(user)
    })

  return newStar
}
