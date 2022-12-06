# react-tree-virtual

> React Tree View with virtualization support based on [react-window](https://github.com/bvaughn/react-window 'react-window')

[![NPM](https://img.shields.io/npm/v/react-tree-virtual.svg)](https://www.npmjs.com/package/react-tree-virtual) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tree-virtual
```

## Simple tree example
https://codesandbox.io/s/react-typescript-forked-1wr274
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
      Row={(props) => <Row {...props} onExpand={onExpand} />}
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
      Row={(props) => (
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

## data

`data: TreeItem[]` is an array of tree items with following structure:

```tsx
export interface TreeItem {
  id: string
  children: TreeItem[]
  [key: string]: unknown
}
```

`id` and `children` are required, also you can pass any field and it will be propagated to `Row`

## controlObject

`controlObject: ControlObject` is a object with following structure:

```tsx
export interface ControlObject {
  [key: string]: {
    expanded: boolean
    [key: string]: unknown
  }
}
```

The key of this object is an `id` of `TreeItem` and the value is the data which will be propagated to `Row`. This object is used to control expanded/collapsed state of the items, also it can be used to implement selections and for any other control purposes.

## Row

`Row` is React Component that will be used to generate row of Tree View. This component will recieve props based on `data` and `controlObject` tree props.

## React Window props

Since react-virtual-tree is based on [FixedSizeList](https://react-window.vercel.app/#/examples/list/fixed-size 'FixedSizeList') from [react-window](https://github.com/bvaughn/react-window 'react-window') all props from FixedSizeList are available.

## License

MIT © [karpengold](https://github.com/karpengold)
