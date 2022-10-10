# react-tree-virtual

> React Tree View with virtualization support

[![NPM](https://img.shields.io/npm/v/react-tree-virtual.svg)](https://www.npmjs.com/package/react-tree-virtual) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tree-virtual
```

## Simple tree example

```tsx
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
```

## Tree with selections

```tsx
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
```

## License

MIT © [karpengold](https://github.com/karpengold)
