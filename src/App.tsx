import { Box, Button, Flex, Grid, Input, Link, Text } from '@chakra-ui/react';
import './App.css';
import { useState } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import { Column } from './components/Column';
import { Issue } from './utils/types/Issue';

const issues: Issue[] = [
  {
    id: 12,
    title: 'How can I create my own link',
    date: 'Fri Dec 13 2024',
    status: 'open',
    author: 'Lonelybhadboi',
    comments: 0,
  },
  {
    id: 10,
    title: 'Termux camdumper',
    date: 'Tue Feb 27 2024',
    status: 'open',
    author: 'Salik00790',
    comments: 1,
  },
  {
    id: 9,
    title: 'Hack Cam',
    date: 'Wed Oct 11 2023',
    status: 'open',
    author: 'S0say',
    comments: 0,
  },
  {
    id: 7,
    title: 'Link not generating',
    date: 'Jan 27 2023',
    status: 'open',
    author: 'Baka-U',
    comments: 1,
  },
];

export const App = () => {
  const [search, setSearch] = useState('');

  return (
    <Box p={6} bg="gray.900" minH="100vh" color="white">
      <Flex mb={4} gap={2}>
        <Input
          placeholder="Search issues..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          bg="gray.800"
        />
        <Button colorScheme="red">✖</Button>
        <Button colorScheme="blue">Load Issues</Button>
        <Button colorScheme="green">I'm lazy, find random repo</Button>
      </Flex>

      <Flex mb={4} align="center" fontSize="lg">
        <Link color="blue.400">mangoszero</Link>
        <Text mx={2}>{'>'}</Text>
        <Link color="blue.400">server</Link>
        <StarIcon color="yellow.400" mr={1} width="3" /> 933
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <Column title="open" issues={issues.filter((i) => i.status === 'open')} />
        <Column title="inProgress" issues={issues.filter((i) => i.status === 'inProgress')} />
        <Column title="closed" issues={issues.filter((i) => i.status === 'closed')} />
      </Grid>
    </Box>
  );
};
