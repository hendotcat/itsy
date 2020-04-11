import DiskPanelInspector from "@highvalley.systems/itsyexpo/components/disk-panel-inspector"
import DiskPanelList from "@highvalley.systems/itsyexpo/components/disk-panel-list"
import {
  Disk,
  DiskType,
  selectActiveDisk,
} from "@highvalley.systems/itsyexpo/store/disks"
import React from "react"
import { connect } from "react-redux"

interface DiskPanelProps {
  disk: Disk
}

const mapStateToProps = (state) => ({
  disk: selectActiveDisk(state),
})

const mapDispatchToProps = {}

export function DiskPanel({ disk }: DiskPanelProps) {
  return (
    <>
      {disk.type !== DiskType.empty ? (
        <DiskPanelInspector />
      ) : (
        <DiskPanelList />
      )}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DiskPanel)
