import React from 'react'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import { FlattenedItem } from 'react-tree-virtual'

const Row: React.FC<FlattenedItem & { onExpand: (id: string) => void }> = ({
  deepness,
  id,
  expanded,
  name,
  hasChildren,
  onExpand
}) => {
  return (
    <div
      style={{
        marginLeft: deepness * 20,
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      {hasChildren && (
        <div onClick={() => onExpand(id)}>
          {expanded ? <MdExpandLess /> : <MdExpandMore />}
        </div>
      )}
      {name}
    </div>
  )
}

export default Row
