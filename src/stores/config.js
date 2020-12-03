export const SET_CONFIG = 'SET_CONFIG'

const initialState = {
  data: {},
}

export function setConfig(data = {}) {
  return {
    type: SET_CONFIG,
    data,
  }
}

export default function config(state = initialState, action) {
  switch (action.type) {
    case SET_CONFIG:
      return {
        ...state,
        data: action.data ? action.data : {},
      }
    default:
      return state
  }
}
