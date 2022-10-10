export type FlattenedItem = {
  deepness: number
  parents: string[]
  hasChildren: boolean
  id: string
  [key: string]: unknown
}

export interface TreeItem {
  id: string
  children: TreeItem[]
  [key: string]: unknown
}

export interface ControlObject {
  [key: string]: { expanded: boolean; [key: string]: unknown }
}
