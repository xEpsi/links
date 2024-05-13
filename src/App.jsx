import React from 'react';
import './App.css';
import { Avatar, MantineProvider, Button, Global, Title, Center, Stack, Group } from '@mantine/core';
import { BrandYoutube, BrandDiscord, BrandGithub, BrandTwitter, BrandSpotify, QuestionMark } from 'tabler-icons-react';

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles>
      <main>
        <Global
        styles={(theme) => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          body: {
            ...theme.fn.fontStyles(),
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            lineHeight: theme.lineHeight,
          },
        })}
      />
        <Center inline>
          <Stack align="center" justify="space-around" spacing="lg">
            <Group position="center" spacing="sm">
              <Avatar src="https://i.ibb.co/4fyqxGL/pfpsquare.jpg" alt="yo" />
              <Title>Epsi</Title>
            </Group>
            
            <Group position="center" spacing="sm">
              <Button 
                leftIcon={<BrandYoutube />} 
                target="_blank"
                component="a"
                variant="gradient" 
                gradient={{ from: '#d42232', to: 'red' }}
                href="https://youtube.com/xEpsi"
              >
                YouTube
              </Button>
              
              <div class="space"/>
              
              <Button 
                leftIcon={<BrandDiscord />} 
                target="_blank"
                component="a"
                variant="gradient" 
                gradient={{ from: 'indigo', to: '#5865f2', deg: 134 }}
                href="https://discord.epsi.space/"
              >
                Discord
              </Button>
              
              <div class="space"/>
              
              <Button 
                leftIcon={<BrandGithub />} 
                target="_blank"
                component="a"
                variant="gradient" 
                gradient={{ from: '#383838', to: '#666666', deg: 50 }}
                href="https://github.com/xEpsi"
              >
                GitHub
              </Button>
              
              <div class="space"/>
              
              <Button 
                leftIcon={<BrandTwitter />} 
                target="_blank"
                component="a"
                variant="gradient" 
                gradient={{ from: '#00acee', to: '#62c6f1', deg: 75 }}
                href="https://twitter.com/epsi_dev"
              >
                Twitter
              </Button>
              
              <div class="space"/>
              
              <Button 
                leftIcon={<BrandSpotify />} 
                target="_blank"
                component="a"
                variant="gradient" 
                gradient={{ from: 'green', to: '#3eba3c', deg: 127 }}
                href="https://spti.fi/epsi"
              >
                Spotify
              </Button>
            </Group>
            <Button
                target="_blank"
                component="a"
                variant="gradient"
                gradient={{ from: '#999999', to: '#dedede', deg: 127 }}
                href="https://www.youtube.com/watch?v=iik25wqIuFo">
                 ?
              </Button>
          </Stack>
        </Center>
      </main>
    </MantineProvider>
  );
}

export default App;
