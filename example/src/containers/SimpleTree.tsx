import React, { useCallback, useState } from 'react'
import { FlattenedItem, VirtualTree } from 'react-tree-virtual'
import Row from '../components/Row'
import { createTree } from '../mocks/default'

const data = createTree()

const SimpleTree = () => {
  const [controlObject, setControlObject] = useState({})
  const onExpand = useCallback((id) => {
    setControlObject((prev) => ({
      ...prev,
      [id]: { ...prev[id], expanded: !prev[id]?.expanded }
    }))
  }, [])

  return (
    <VirtualTree
      itemSize={30}
      height={500}
      width={300}
      controlObject={controlObject}
      Row={(props: FlattenedItem) => <Row {...props} onExpand={onExpand} />}
      data={data}
    />
  )
}

export default SimpleTree
