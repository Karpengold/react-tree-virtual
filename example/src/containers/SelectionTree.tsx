import React, { useCallback, useState } from 'react'
import { FlattenedItem, VirtualTree } from 'react-tree-virtual'
import SelectionRow from '../components/SelectionRow'
import { createTree } from '../mocks/default'

const data = createTree()

const SelectionTree = () => {
  const [controlObject, setControlObject] = useState({})
  const onExpand = useCallback((id) => {
    setControlObject((prev) => ({
      ...prev,
      [id]: { ...prev[id], expanded: !prev[id]?.expanded }
    }))
  }, [])

  const onSelect = useCallback((id) => {
    setControlObject((prev) => ({
      ...prev,
      [id]: { ...prev[id], selected: !prev[id]?.selected }
    }))
  }, [])

  return (
    <VirtualTree
      itemSize={30}
      height={500}
      width={300}
      controlObject={controlObject}
      Row={(props: FlattenedItem) => (
        <SelectionRow
          {...props}
          selected={controlObject[props.id]?.selected}
          onExpand={onExpand}
          onSelect={onSelect}
        />
      )}
      data={data}
    />
  )
}

export default SelectionTree
