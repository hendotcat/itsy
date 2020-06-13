import { selectSpritesheetPng } from "@highvalley.systems/itsydraw/store/spritesheet"
import {
  selectClipboardRect,
  ToolIds,
} from "@highvalley.systems/itsydraw/store/tools"
import { Rect } from "@highvalley.systems/typedefs/itsy"
import pico8 from "@highvalley.systems/palettes/pico8"
import React from "react"
import { connect } from "react-redux"
import styles from "./clipboard-icon.module.scss"

interface ClipboardIconProps {
  clipboardRect: Rect
  spritesheetPng: string
}

const mapStateToProps = (state) => ({
  clipboardRect: selectClipboardRect(state),
  spritesheetPng: selectSpritesheetPng(state),
})

const mapDispatchToProps = {}

export function ClipboardIcon({
  clipboardRect,
  spritesheetPng,
}: ClipboardIconProps): React.ReactElement {
  const viewBox = [
    clipboardRect.x - 8,
    clipboardRect.y - 8,
    clipboardRect.width + 16,
    clipboardRect.height + 16,
  ].join(" ")

  const svg: React.SVGAttributes<SVGElement> = {
    className: styles.svg,
    viewBox,
    preserveAspectRatio: "xMidYMid meet",
    width: "100%",
    height: "100%",
  }

  const clip: React.SVGAttributes<SVGRectElement> = {
    className: styles.clip,
    id: "clipboard",
    ...clipboardRect,
  }

  const image: React.SVGAttributes<SVGImageElement> = {
    className: styles.image,
    href: `data:image/png;base64,${spritesheetPng}`,
    height: 128,
    clipPath: "url(#clipboard)",
  }

  const outline: React.SVGAttributes<SVGRectElement> = {
    x: clipboardRect.x - 4,
    y: clipboardRect.y - 4,
    width: clipboardRect.width + 4,
    height: clipboardRect.height + 4,
    fill: "none",
    stroke: pico8[14],
    strokeDasharray: Math.max(clipboardRect.width, clipboardRect.height) / 16,
    strokeWidth: Math.max(clipboardRect.width, clipboardRect.height) / 16,
  }

  return (
    <svg {...svg}>
      <defs>
        <clipPath id="clipboard">
          <rect {...clip} />
        </clipPath>
      </defs>
      <image {...image} />
      <rect {...outline} />
    </svg>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ClipboardIcon)
