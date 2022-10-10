import React from 'react'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import { FlattenedItem } from 'react-tree-virtual'

const Row: React.FC<
  FlattenedItem & {
    onExpand: (id: string) => void
    onSelect: (id: string) => void
    selected: boolean
  }
> = ({
  deepness,
  id,
  expanded,
  name,
  hasChildren,
  onExpand,
  onSelect,
  selected
}) => {
  return (
    <div
      style={{
        marginLeft: deepness * 20,
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <input
        checked={selected}
        onChange={() => onSelect(id)}
        type='checkbox'
      ></input>
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
