import { ChangeEvent, MouseEventHandler } from 'react'

export interface InputProps {
  /**
   * overrides `isReadOnly` prop when double clicked then resets when blurred
   * - only applicable when `isReadOnly` is `true`
   */
  canEdit?: boolean
  isFullWidth?: boolean
  isReadOnly?: boolean
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onDoubleClick?: MouseEventHandler<HTMLInputElement>
  placeholder?: string
  size?: 'default' | 'big'
  value?: string
}
