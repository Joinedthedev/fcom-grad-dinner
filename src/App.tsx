import { useRef } from "react";



import { ArrowRightIcon, ChatIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import FAQAccordion from "./FAQAccordion";
import Itenary from "./Itenary";

function App() {
  const accord = useRef<null | HTMLDivElement>(null);
  const isDesktop = useBreakpointValue({ base: false, xs: false, sm: false, md:false, lg: true })
  return(
    <>
    {!isDesktop ?
      <Box p={4} color={"green.500"}>
        <HStack align={"center"} justify={"center"}>
          <Heading fontSize={"3xl"} textAlign={"center"}>
            FCOM Graduation Dinner
          </Heading>
        </HStack>

        <Box p={5} mx={"auto"} mt={3}>
          <Heading textAlign={"center"} fontSize={"2xl"}>
            {" "}
            A Dinner You Don't Wanna Miss
          </Heading>
          <Text textAlign={"justify"} fontSize={"lg"}>
            Join us for an unforgettable evening of celebration as we mark the
            end of our academic journey and the beginning of new adventures.
            This isn't just a dinner – it's a chance to create lasting memories
            with the friends who've become family over the years.
          </Text>
          <Flex py={4} justify={"space-between"}>
           
              <Button
                bg={"green.500"}
                color={"white"}
                rightIcon={<Icon as={ArrowRightIcon} />}
                onClick={() =>
                  accord.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {" "}
                Learn More
              </Button>
            
           
              <Button
                bg={"green.500"}
                color={"white"}
                rightIcon={<Icon as={CheckIcon} />}
               isDisabled
              >
                
                {" "}
                Pay Now{" "}
              </Button>
        
          </Flex>
        </Box>

        <VStack>
          <Itenary />
        </VStack>

        <VStack id="accord" ref={accord}>
          <Heading textAlign={"center"} fontSize={"2xl"} p={2}>
            Frequently Asked Questions (FAQ)
          </Heading>
          <FAQAccordion />

          <a href="https://chat.whatsapp.com/K9T59y95JwSDT9yWHIDK4f">
            <Button
              m={3}
              bg={"green.500"}
              color={"white"}
              rightIcon={<Icon as={ChatIcon} />}
            >
              {" "}
              More questions? Chat With us!
            </Button>
          </a>
        </VStack>
        
      </Box>
    : <HStack justify={"center"} align={"center"}>
      <Heading  color={"green.500"} fontSize={"100px"}>Please Open on Mobile!</Heading>
    </HStack>}
    </>
  );
}

export default App;
