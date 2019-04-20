import { FileSystem } from "expo"

export default disk => {
  const root = FileSystem.documentDirectory
  const base = disk.name.replace(/[^a-z0-9]/ig, '-')
  const name = `${root}${base}.html`
  return name
}