import React, { FC } from 'react';
import { IconButton as MaterialIconButton } from '@mui/material';

import Icon from '../../atoms/Icon/Icon';

interface IIconButtonProps {
  iconName: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const IconButton: FC<IIconButtonProps> = props => {
  const {
    iconName,
    onClick,
  } = props;

  return (
    <MaterialIconButton onClick={onClick}>
      <Icon iconName={iconName} />
    </MaterialIconButton>
  )
};

export default IconButton;