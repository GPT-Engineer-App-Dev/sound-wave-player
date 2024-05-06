import { Box, Button, Container, Text, VStack, Flex, IconButton } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { useState } from "react";

const songs = [
  { title: "Song One", artist: "Artist A" },
  { title: "Song Two", artist: "Artist B" },
  { title: "Song Three", artist: "Artist C" }
];

const Index = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipSong = (forward = true) => {
    if (forward) {
      setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    } else {
      setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">{songs[currentSongIndex].title}</Text>
        <Text fontSize="lg">{songs[currentSongIndex].artist}</Text>
        <Flex>
          <IconButton aria-label="Previous" icon={<FaBackward />} onClick={() => skipSong(false)} m={2} />
          <IconButton aria-label={isPlaying ? "Pause" : "Play"} icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={playPause} m={2} />
          <IconButton aria-label="Next" icon={<FaForward />} onClick={() => skipSong(true)} m={2} />
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;