import { Breadcrumb } from '@chakra-ui/react';
import React from 'react';

export const BreadCrumbs = () => {
  return (
    <Breadcrumb.Root size="md">
      <Breadcrumb.List>
        <Breadcrumb.Item textStyle="lg">
          <Breadcrumb.Link href="#">Facebook</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item textStyle="lg">
          <Breadcrumb.Link href="#">React</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};
