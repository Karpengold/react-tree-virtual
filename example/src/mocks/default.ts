export const createTree = (level: number = 1, items: number = 1000): any => {
  return [...new Array(items)].map((_, index) => ({
    id: (Math.random() * 100000).toFixed(),
    name: `Row ${index}`,
    children: level ? createTree(level - 1) : []
  }))
}
