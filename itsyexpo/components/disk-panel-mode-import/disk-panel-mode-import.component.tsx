import Button, {
  ButtonThemes,
} from "@highvalley.systems/itsyexpo/components/button"
import DiskPanelSubmodeCreate from "@highvalley.systems/itsyexpo/components/disk-panel-submode-create"
import Font from "@highvalley.systems/itsyexpo/components/font"
import React from "react"
import { connect } from "react-redux"
import styles from "./disk-panel-mode-import.module.scss"

interface DiskPanelModeImportProps {}

const mapStateToProps = (state, { id }) => ({
  // disk: selectActiveDisk(state),
})

const mapDispatchToProps = {}

export function DiskPanelModeImport({}: DiskPanelModeImportProps) {
  return (
    <DiskPanelSubmodeCreate style={styles.component}>
      <Font fontSize={24}>importing</Font>
    </DiskPanelSubmodeCreate>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DiskPanelModeImport)
