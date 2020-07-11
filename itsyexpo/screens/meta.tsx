import DiskPanelModeInspect from "@highvalley.systems/itsyexpo/components/disk-panel-mode-inspect"
import SafeArea from "@highvalley.systems/itsyexpo/components/safe-area"
import React from "react"
import { connect } from "react-redux"

interface MetaScreenProps {}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {}

export function MetaScreen({}: MetaScreenProps) {
  return (
    <SafeArea>
      <DiskPanelModeInspect />
    </SafeArea>
  )
}

MetaScreen.navigationOptions = {
  header: <></>,
}

export default connect(mapStateToProps, mapDispatchToProps)(MetaScreen)
