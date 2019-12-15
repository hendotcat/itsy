import React from "react"
import { View } from "react-native"
import { connect } from "react-redux"
import colors from "@itsy.studio/palettes/pico8/original.es6"
import { workerRunning } from "../../store/worker"
import Font from "../font"
import styles from "./worker.module.scss"

interface WorkerProps {
  running: boolean
}

const mapStateToProps = state => ({
  running: workerRunning(state),
})

export function Worker({ running }: WorkerProps) {
  return (
    <View style={styles.worker}>
      <Font
        fontSize={64}
        color={colors[7]}
        borderColor={colors[1]}
        borderMultiplier={3}
        strokeMultiplier={0.9}
      >{"building"}</Font>
    </View>
  )
}

export default connect(mapStateToProps)(Worker)