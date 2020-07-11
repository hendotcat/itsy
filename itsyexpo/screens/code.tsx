import CodePanel from "@highvalley.systems/itsyexpo/components/code-panel"
import SafeArea from "@highvalley.systems/itsyexpo/components/safe-area"
import React from "react"
import { connect } from "react-redux"

interface CodeScreenProps {}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {}

export function CodeScreen({}: CodeScreenProps) {
  return (
    <SafeArea>
      <CodePanel />
    </SafeArea>
  )
}

CodeScreen.navigationOptions = {
  header: <></>,
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeScreen)
