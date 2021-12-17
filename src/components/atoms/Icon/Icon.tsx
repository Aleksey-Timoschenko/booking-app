import { FC } from 'react';

import { Icon as MaterialIcon } from '@mui/material';

enum IconSizes {
  INHERIT = 'inherit',
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

interface IIconProps {
  iconName: string;
  size?: IconSizes
}

const Icon: FC<IIconProps> = props => {
  const {
    iconName,
    size = IconSizes.LARGE,
  } = props;

  return (
    <MaterialIcon fontSize={size}>
      { iconName }
    </MaterialIcon>
  )
};

export default Icon