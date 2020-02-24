import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit"
import _ from "lodash"
import { Thunk } from "@highvalley.systems/itsycode/store"
import { Point2D } from "@highvalley.systems/typedefs"

const name = "cursor"

const initialState: Point2D = {
  x: 0,
  y: 0,
}

const reducers = {
  move(cursor, action: PayloadAction<Point2D>) {
    cursor.x = action.payload.x
    cursor.y = action.payload.y
  },
}

const slice = createSlice({
  name,
  initialState,
  reducers,
})

export const moveCursor = (point: Point2D): Thunk => async (
  dispatch,
  getState
) => {
  dispatch(slice.actions.move(point))
}

export const cursorSelector = ({ cursor }) => cursor

export default slice