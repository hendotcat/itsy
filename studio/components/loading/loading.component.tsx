import React from "react"
import { Animated, Easing, View } from "react-native"
import { Svg, G, Path } from "react-native-svg"
import { connect } from "react-redux"
import colors from "@highvalley.systems/palettes/pico8/original.es6"
import Font from "@itsy.studio/studio/components/font"
import styles from "@itsy.studio/studio/components/loading/loading.module.scss"

interface LoadingProps {
  style?: any
}

export function Loading({ style }: LoadingProps) {
  const angle = React.useRef(new Animated.Value(0)).current

  const spin = () => {
    angle.setValue(0)
    Animated.timing(angle, {
      toValue: 1,
      duration: Math.pow(2, 11),
      easing: Easing.elastic(0.1),
      useNativeDriver: true,
    }).start(spin)
  }

  React.useEffect(() => {
    spin()
  }, [])

  const rotation = angle.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  })

  const d = [
    "M1,1",
    "L13,1",
    "L13,3",
    "L15,3",
    "L15,15",
    "L1,15",
    "L1,1",
    "L13,1",
  ].join(" ")

  return (
    <View style={{ ...style, ...styles.loading }}>
      <Font
        fontSize={32}
        color={colors[7]}
        borderColor={colors[1]}
        borderMultiplier={3}
        strokeMultiplier={0.9}
      >
        {"loading"}
      </Font>

      <Animated.View
        style={{ ...styles.disk, transform: [{ rotate: rotation }] }}
      >
        <Svg width={64} height={64} viewBox="0 0 16 16">
          <Path
            d={d}
            stroke={colors[0]}
            strokeWidth={1}
            fill={colors[12]}
            origin={[8, 8]}
          />
        </Svg>
      </Animated.View>
    </View>
  )
}

export default Loading
