import React from 'react'
import { createFlattenList } from '../utils/flatten'
import { FixedSizeList, FixedSizeListProps } from 'react-window'
import { ControlObject, FlattenedItem, TreeItem } from '../types'

const VirtualTree: React.FC<React.PropsWithChildren<VirtualTreeProps>> = (
  props
) => {
  const { data, controlObject, Row, ...listProps } = props
  const items = createFlattenList(data, controlObject, [])
  return (
    <FixedSizeList itemCount={items.length} {...listProps}>
      {({ index, style }): JSX.Element => (
        <div style={style}>
          <Row {...items[index]} />
        </div>
      )}
    </FixedSizeList>
  )
}

interface VirtualTreeProps
  extends Omit<FixedSizeListProps, 'children' | 'itemCount'> {
  data: TreeItem[]
  controlObject: ControlObject
  Row: React.FC<FlattenedItem>
}

export default VirtualTree
