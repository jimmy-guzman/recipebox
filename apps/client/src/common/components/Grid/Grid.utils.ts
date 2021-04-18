import { toNumber } from '../../utils'

export const calcGridColumnWidth = (columnSize: number): string => {
  const columnWidth = toNumber('65px')
  const columnCount = 12
  const gutterWidth = toNumber('20px')
  const context = columnWidth * columnCount + gutterWidth * (columnCount - 1)
  const target = columnWidth * columnSize + gutterWidth * (columnSize - 1)

  return `${(target / context) * 100}%`
}
