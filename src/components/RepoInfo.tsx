import React from 'react';
import { BreadCrumbs } from './BreadCrumbs';
import { RepoStars } from './RepoStars';
import { Flex } from '@chakra-ui/react';

export const RepoInfo = () => {
  return (
    <Flex gap="4" align="center">
      <BreadCrumbs />
      <RepoStars count={194000} />
    </Flex>
  );
};
