import _ from "lodash"
import { LayoutRectangle } from "react-native"
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { selectKeyboardHeight } from "@itsy.studio/studio/store/keyboard"
import { Rect } from "@itsy.studio/types/geometry"
import { Thunk } from "@itsy.studio/studio/store"
import { selectScreen } from "@itsy.studio/studio/store/screen"

const name = "safeArea"

const initialState: Rect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
}

const reducers = {
  update(safeArea, action: PayloadAction<Rect>) {
    safeArea.x = action.payload.x
    safeArea.y = action.payload.y
    safeArea.width = action.payload.width
    safeArea.height = action.payload.height
  },
}

const slice = createSlice({
  name,
  initialState,
  reducers,
})

export const updateSafeArea = (layout: LayoutRectangle): Thunk => async (
  dispatch,
  getState
) => {
  const state = getState()
  const oldSafeArea = selectSafeArea(state)

  const newSafeArea: Rect = {
    x: layout.x,
    y: layout.y,
    width: layout.width,
    height: layout.height,
  }

  if (!_.isEqual(oldSafeArea, newSafeArea)) {
    dispatch(slice.actions.update(newSafeArea))
  }
}

export const selectSafeArea = ({ safeArea }): Rect => safeArea

export default slice