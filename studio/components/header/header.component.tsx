import React from "react"
import {
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"

import Floppy from "../floppy"
import Font from "../font"
import styles from "./header.module.scss"
import colors from "../../constants/colors"

export default ({
  disk,
  navigation,
}) => {

  const activeIndex = navigation.state.index
  const activeRoute = navigation.state.routes[activeIndex]
  const activeScreen = activeRoute.routeName

  const title = ({
    Home: () => "itsy studio..",
    Disk: () => activeRoute.params.disk.name,
    Code: () => activeRoute.params.disk.name,
    Help: () => "itsy studio",
  })[activeScreen]()

  const onHelp = () => {
    if (activeScreen !== "Help") {
      navigation.navigate("Help", {})
    } else {
      console.log("goBack")
      navigation.pop()
    }
  }

  const helpStyle = activeScreen === "Help" ? styles.back : styles.help
  const helpText = activeScreen === "Help" ? "done" : "help"

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors[2]}
        barStyle="light-content"
      />
      <View style={styles.inside}>
        <View style={styles.left}>
          <Floppy size={18} style={styles.floppy} />
          <View style={styles.wordmark}>
            <Font
              fontSize={15}
              color={colors[7]}
              borderColor={colors[0]}
              borderMultiplier={3}
              strokeMultiplier={0.9}
            >{title}</Font>
          </View>
        </View>

        <View style={styles.right}>
          <TouchableOpacity style={helpStyle} onPress={onHelp}>
            <Font
              fontSize={15}
              color={colors[7]}
              borderColor={colors[1]}
              borderMultiplier={3}
              strokeMultiplier={0.9}
            >{helpText}</Font>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}