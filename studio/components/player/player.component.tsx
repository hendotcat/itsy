import React from "react"
import { View } from "react-native"
import { WebView } from "react-native-webview"
import { connect } from "react-redux"

import colors from "@itsy.studio/palettes/pico8/original.es6"

import { PlayerState, playerSelector } from "../../store/player"

import Font from "../font"
import styles from "./player.module.scss"

interface PlayerProps {
  player: PlayerState
}

const mapStateToProps = state => ({
  player: playerSelector(state),
})

export function Player({ player }: PlayerProps) {
  const webview = React.useRef()

  React.useEffect(() => {
    if (player.stopping) {
      console.log("triggering snapshot")
      webview.current.postMessage(JSON.stringify({
        type: "stop",
      }))
    }
  }, [player.stopping])

  const handleMessage = event => {
    console.log(`💃 ${event.nativeEvent.data}`)
    // switch (message.type) {
      // case "snapshot":
        // console.log(message.uri)
        // return
    // }
  }

  const inject = `(function() {
    window.ReactNativeWebView.postMessage(JSON.stringify(window.location));
  })();`;

  return (
    <View style={styles.player}>
      <WebView
        ref={webview}
        bounces={false}
        scrollEnabled={false}
        onMessage={handleMessage}
        source={{ html: player.html }}
        injectedJavaScriptBeforeContentLoaded={inject}
      />
    </View>
  )
}

export default connect(mapStateToProps)(Player)

/*
export default class Player extends React.Component {
  static propTypes = {
    disk: PropTypes.any,
    edit: PropTypes.any,
    onSnap: PropTypes.any,
  }

  constructor(props) {
    super(props)
    this.state = {
      rebooting: false,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.disk.id)
    if (this.props.disk.id !== nextProps.disk.id) {
      console.log("different disk")
      return true
    }

    if (!this.props.edit || !nextProps.edit) {
      console.log("different edit")
      return true
    }

    const thisEdit = this.props.edit
    const nextEdit = nextProps.edit

    const { lua } = this.props.edit

    const play = thisEdit.stopped && !nextEdit.stopped
    const stop = !thisEdit.stopped && nextEdit.stopped

    const beginReboot = !this.state.rebooting && nextState.rebooting
    const endReboot = this.state.rebooting && !nextState.rebooting

    if (beginReboot || endReboot) {
      console.log("reboot started or ended")
      return true
    }

    if (play) {
      this.setState({ rebooting: true })
      setTimeout(() => {
        this.setState({
          rebooting: false,
          stopped: false,
        })
      }, 10)
      console.log("rebooting to play")
      return true
    }

    if (stop) {
      this.webview.postMessage(JSON.stringify({
        type: "stop",
      }))
      setTimeout(() => {
        this.setState({
          stopped: true,
        })
      }, 100)
      console.log("stopping")
      return false
    }

    if (nextState.stopped) {
      console.log("stopped")
      return true
    }

    console.log("fuck off")
    return false
  }

  render() {
    const { rebooting, stopped } = this.state
    const { edit, onSnap } = this.props

    const handleMessage = event => {
      const message = JSON.parse(event.nativeEvent.data)
      console.log(`💃 ${message.type}`)
      //console.log(message)
      switch (message.type) {
        case "snapshot":
          //console.log("SNAPSHOOSOSOSOS")
          //console.log(message.uri)
          //console.log(message.keys)
          onSnap(message.uri)
          return
      }
    }

    let mode
    if (edit && stopped) {
      mode = "snapshot"
    } else if (edit && !edit.stopped) {
      mode = "player"
    }
    //console.log(edit && edit.stopped)

    return (
      <View style={styles.container}>
        <View style={styles.screen}>
          {mode === "snapshot" && (
            <WebView
              source={{ html: `
                <!DOCTYPE html>
                <html>
                <head>
                <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, width=device-width">
                </head>
                <body>
                <style type="text/css">
                  html {
                    overflow: hidden;
                    user-select: none;
                  }

                  body {
                    background-color: #111;
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0;
                    overflow: hidden;
                    user-select: none;
                  }

                  img {
                    width: 100vmin;
                    height: 100vmin;
                    image-rendering: pixelated;
                  }
                </style>
                <img src="${edit.snapshot}" />
                </body>
                </html>
              ` }}
              useWebKit
            />
          )}

          {mode === "player" && (
            <WebView
              ref={(view) => { this.webview = view; }}
              bounces={false}
              scrollEnabled={false}
              onMessage={handleMessage}
              source={{ html: "<h1>hello</h1>" }}
              useWebKit
              style={styles.screen}
            />
          )}
        </View>
      </View>
    )
  }
}

*/
