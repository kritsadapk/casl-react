import { AbilityBuilder } from '@casl/ability'

/**
 * Defines how to detect object's type: https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
 */
function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item
  }

  return item.__type
}
const convertBit = (bit) =>{
  switch (bit) {
    case 1110:
      return ['read','create'] 
    default:
      return ['read']
  }
}
export default AbilityBuilder.define({ subjectName }, can => {
  // data from back-end resful 

  const obj = {
    todo: 1110
  }

  can(convertBit(obj.todo), 'Todo')
  can(['update', 'delete'], 'Todo', { assignee: 'me' })
})
