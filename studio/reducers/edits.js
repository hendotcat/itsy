import {
  reducer,
  insert,
  merge,
  remove,
} from "@highvalley.systems/signalbox"

const update = entityName => (entityState, action) => ({
  ...entityState,
  [action[entityName].id]: {
    ...entityState[action[entityName].id],
    ...action[entityName],
  },
})

export default reducer({}, {
  startup: (edits, action) => {
    return {
      ...edits,
      ...action.edits,
    }
  },

  new: update("edit"),
  edit: update("edit"),
  play: update("edit"),
  snap: update("edit"),
  stop: update("edit"),
})
