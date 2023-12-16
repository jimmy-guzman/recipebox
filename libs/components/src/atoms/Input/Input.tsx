import { useState } from 'react';

import { styles } from './Input.styles';
import { type InputProps } from './Input.types';

export const Input = ({
  canEdit,
  isFullWidth,
  onBlur,
  onChange,
  onDoubleClick,
  placeholder,
  isReadOnly,
  size = 'default',
  value,
}: InputProps): JSX.Element => {
  const [willReadyOnly, setWillReadyOnly] = useState(() => isReadOnly ?? false);

  return (
    <input
      css={styles({ isFullWidth, size })}
      value={value}
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      onDoubleClick={(e): void => {
        if (onDoubleClick) {
          onDoubleClick(e);
        }

        if (canEdit && isReadOnly) {
          setWillReadyOnly(false);
        }
      }}
      onBlur={(e): void => {
        if (onBlur) {
          onBlur(e);
        }

        if (canEdit && isReadOnly) {
          setWillReadyOnly(true);
        }
      }}
      readOnly={isReadOnly && willReadyOnly}
    />
  );
};
