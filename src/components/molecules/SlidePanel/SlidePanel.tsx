import React, { FC } from 'react';
import { SwipeableDrawer as MaterialSlidePanel } from '@mui/material';

enum SlidePoints {
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
}

interface ISlidePanelProps {
  isOpened: boolean,
  onOpen: (event: React.MouseEvent<HTMLElement>) => void,
  onClose: (event: React.MouseEvent<HTMLElement>) => void,
  slidePoint?: SlidePoints,
}

const SlidePanel: FC<ISlidePanelProps> = props => {
  const {
    isOpened,
    onOpen,
    onClose,
    slidePoint = SlidePoints.RIGHT,
    children,
  } = props;
  
  return (
    <MaterialSlidePanel
      anchor={slidePoint}
      open={isOpened}
      onOpen={onOpen}
      onClose={onClose}
    >
      { children }
    </MaterialSlidePanel>
  )
};

export default SlidePanel;