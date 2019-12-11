import React from "react"
import { Svg, Defs, ClipPath, Path, Image as SvgImage } from "react-native-svg"

import {
  Image,
  TouchableOpacity,
} from "react-native"

import { connect } from "react-redux"

import Font from "../font"

import colors from "@itsy.studio/palettes/pico8/original.es6"
import styles from "./tile.module.scss"
import select from "../../selectors"

const mapStateToProps = (state, ownProps) => ({
  disk: select.disks.from(state).byId(ownProps.id),
  edit: select.edits.from(state).forHome(ownProps.id),
})

export function Tile({
  disk,
  edit,
  onPress,
  size,
}) {
  const dimensions = {
    width: size,
    height: size,
  }

  const diskSize = size / 2

  return (
    <TouchableOpacity style={[styles.tile, dimensions]} onPress={onPress}>
      <Svg style={styles.disk} width={diskSize} height={diskSize} viewBox="0 0 16 16">

        <Defs>
          <ClipPath id="shape">
            <Path
              d={[
                "M1.5,1.5",
                "L12.5,1.5",
                "L12.5,3.5",
                "L14.5,3.5",
                "L14.5,14.5",
                "L1.5,14.5",
                "L1.5,1.5",
                "L12.5,1.5",
              ].join(" ")}
            />
          </ClipPath>
        </Defs>

        <Path
          d={[
            "M1,1",
            "L13,1",
            "L13,3",
            "L15,3",
            "L15,15",
            "L1,15",
            "L1,1",
            "L13,1",
          ].join(" ")}
          stroke={colors[0]}
          strokeWidth={1}
          fill={colors[12]}
        />

        {edit && (
          <Image
            href={{ uri: edit.snapshot }}
            x={1}
            y={1}
            width={14}
            height={14}
            clipPath="url(#shape)"
          />
        )}

      </Svg>

      <Font
        fontSize={15}
        color={colors[7]}
        borderColor={colors[1]}
        borderMultiplier={3}
        strokeMultiplier={0.9}
      >{disk.name}</Font>

    </TouchableOpacity>
  )
}

export default connect(mapStateToProps)(Tile)
