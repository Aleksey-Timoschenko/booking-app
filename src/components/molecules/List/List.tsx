import { FC } from 'react';
import { List as MaterialList } from '@mui/material';

interface IListProps {

}

const List: FC<IListProps> = props => {
  const { children } = props;

  return (
    <MaterialList>
      { children }
    </MaterialList>
  )
};

export default List;