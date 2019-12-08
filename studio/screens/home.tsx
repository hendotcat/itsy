import React from "react"
import PropTypes from "prop-types"

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native"

import { FlatGrid } from "react-native-super-grid"

import { connect } from "react-redux"

import actions from "../actions"
import colors from "@itsy.studio/palettes/pico8/original.es6"
import select from "../selectors"
import thunks from "../thunks"

import Tile from "../components/tile"
import Floppy from "../components/floppy"
import Font from "../components/font"
import Header from "../components/header"

const mapStateToProps = state => ({
  disks: select.disks.from(state).forHomeScreen(),
})

const mapDispatchToProps = dispatch => ({
  onNew: () => dispatch(thunks.new()),
  open: diskId => dispatch(actions.open(diskId)),
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: Header
  }

  static propTypes = {
    disks: PropTypes.any,
    navigation: PropTypes.any,
    onNew: PropTypes.any,
    open: PropTypes.any,
  }

  componentDidMount() {
    return // COMMENT HERE TO LOAD CODE SCREEN
    this.props.open("abc")
    this.props.navigation.navigate("Code", {
      disk: {
        id: "abc",
        name: "example",
      },
    })
  }

  render() {
    const {
      disks,
      navigation,
      onNew,
      open,
    } = this.props

    const onPress = disk => () => {
      open(disk.id)
      navigation.navigate("Disk", { disk })
    }

    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.frame1}>
          <View style={styles.frame2}>

            <View style={styles.controls}>
              <TouchableOpacity style={styles.new} onPress={onNew}>
                <Font
                  fontSize={16}
                  color={colors[7]}
                  borderColor={colors[1]}
                  strokeMultiplier={0.9}
                  borderMultiplier={3}
                >new</Font>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.container}>

              <FlatGrid
                itemDimension={128}
                items={disks}
                renderItem={({ item: disk }) => (
                  <Tile
                    key={disk.id}
                    id={disk.id}
                    onPress={onPress(disk)}
                    size={120}
                  />
                )}
              />
            </ScrollView>

          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors[14],
    borderRightColor: colors[2],
    borderBottomColor: colors[2],
    borderLeftColor: colors[2],
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },

  frame1: {
    flex: 1,
    display: "flex",
    borderRightColor: colors[14],
    borderBottomColor: colors[14],
    borderLeftColor: colors[14],
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },

  frame2: {
    flex: 1,
    display: "flex",
    borderTopColor: colors[2],
    borderRightColor: colors[2],
    borderBottomColor: colors[2],
    borderLeftColor: colors[2],
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },

  controls: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 32,
    backgroundColor: colors[15],
    borderBottomColor: colors[13],
    borderBottomWidth: 2,
    paddingLeft: 2,
  },

  container: {
    flex: 1,
    backgroundColor: colors[7],
  },

  new: {
    display: "flex",
    alignItems: "center",
    backgroundColor: colors[13],
    borderColor: colors[5],
    borderWidth: 2,
    padding: 2,
    paddingBottom: 4,
    width: 64,
  },

  button: {
    width: 256,
    height: 256,
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
  