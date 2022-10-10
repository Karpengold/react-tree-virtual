import { TreeItem, ControlObject, FlattenedItem } from '../types'

export const createFlattenList = (
  treeData: TreeItem[],
  controlObject: ControlObject,
  parents: string[]
): FlattenedItem[] => {
  return treeData.reduce((flattenedTree, node) => {
    const deepness = parents.length
    const { children, ...nodeWithoutChildren } = node
    const nodeWithHelpers = {
      ...nodeWithoutChildren,
      deepness,
      parents,
      hasChildren: !!children.length,
      ...controlObject[node.id]
    }

    if (!children?.length || !controlObject[node.id]?.expanded) {
      return [...flattenedTree, nodeWithHelpers]
    }

    return [
      ...flattenedTree,
      nodeWithHelpers,
      ...createFlattenList(children, controlObject, [...parents, node.id])
    ]
  }, [])
}
