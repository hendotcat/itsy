import React from "react"
import { View } from "react-native"
import { connect } from "react-redux"
import DevtoolsPlayPanelConsole from "@itsy.studio/studio/components/devtools-play-panel-console"
import DevtoolsPlayPanelControls from "@itsy.studio/studio/components/devtools-play-panel-controls"
import DevtoolsPlayPanelScreen from "@itsy.studio/studio/components/devtools-play-panel-screen"
import Panel from "@itsy.studio/studio/components/panel"
import { PlayerState, playerSelector } from "@itsy.studio/studio/store/player"
import { ScreenState, selectScreen } from "@itsy.studio/studio/store/screen"
import styles from "./play-panel.module.scss"

interface PlayPanelProps {
  player: PlayerState
  screen: ScreenState
}

const mapStateToProps = (state) => ({
  player: playerSelector(state),
  screen: selectScreen(state),
})

const mapDispatchToProps = {}

export function PlayPanel({ player, screen }: PlayPanelProps) {
  const panelWidth = {
    width: screen.width,
  }

  const screenHeight = {
    height: screen.width - 4,
  }

  return (
    <Panel width={screen.width}>
      <View style={[styles.screen, screenHeight]}>
        <DevtoolsPlayPanelScreen />
      </View>
      <View style={styles.controls}>
        <DevtoolsPlayPanelControls />
      </View>
      <View style={styles.console}>
        <DevtoolsPlayPanelConsole />
      </View>
    </Panel>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPanel)
