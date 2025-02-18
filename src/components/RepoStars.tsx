import { Box } from '@chakra-ui/react';
import React from 'react';

type Props = {
  count: number;
};
export const RepoStars: React.FC<Props> = ({ count }) => {
  return (
    <Box>
      <img />
      {count} stars
    </Box>
  );
};
