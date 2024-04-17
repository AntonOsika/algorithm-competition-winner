// Complete the Index page component for Johan Sannemo's book about winning algorithm competitions
import { Box, Container, Heading, Text, Textarea, Button, VStack, Divider, SimpleGrid, useToast, HStack } from "@chakra-ui/react";
import { FaStar, FaPlay } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const toast = useToast();

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const executeCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(JSON.stringify(result, null, 2));
    } catch (error) {
      toast({
        title: "Error executing code",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setOutput("");
    }
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="xl">
            Mastering Algorithm Competitions
          </Heading>
          <Text mt={4}>By Johan Sannemo</Text>
          <Text mt={2}>Dive deep into the world of algorithm competitions with this comprehensive guide by Johan Sannemo. Learn strategies, techniques, and secrets that will help you win.</Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg">
            Book Reviews
          </Heading>
          <SimpleGrid columns={2} spacing={10} mt={4}>
            <Box>
              <HStack>
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <Text>- "A must-read for anyone serious about competitive programming!"</Text>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <Text>- "Changed the way I approach problems. Highly recommended!"</Text>
              </HStack>
            </Box>
          </SimpleGrid>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg">
            Try It Yourself
          </Heading>
          <Text mt={2}>Enter JavaScript code to execute:</Text>
          <Textarea value={code} onChange={handleCodeChange} placeholder="Enter your code here" size="sm" height="150px" />
          <Button leftIcon={<FaPlay />} colorScheme="teal" mt={4} onClick={executeCode}>
            Execute
          </Button>
          <Text mt={4}>Output:</Text>
          <Textarea value={output} isReadOnly placeholder="See results here" size="sm" height="150px" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
