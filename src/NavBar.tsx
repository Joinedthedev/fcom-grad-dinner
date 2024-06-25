import { useRef } from "react";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import gradCap from "./assets/grad-cap.jpg";

type NavLinkProps = {
  name: string;

  ref: React.RefObject<HTMLDivElement> | null;
};


const NavLink = ({ name, ref }: NavLinkProps) => {
  
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      color={"gold.500"}
      _hover={{
        textDecoration: "none",
      }}
      onClick={() => ref?.current?.scrollIntoView({ behavior: "smooth" })}
    >
      {name}
    </Box>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dressCode = useRef<null | HTMLDivElement>(null);
  const faqSect = useRef<null | HTMLDivElement>(null);
  
  const Links = [
    { Name: "About", ref: dressCode },
    { Name: "Dress Code", ref: faqSect },
    { Name: "FAQ", ref: null },
  ];
  return (
    <>
      <Box bg={"black"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            bg={"black"}
            size={"lg"}
            icon={
              isOpen ? (
                <CloseIcon color={"gold.500"} />
              ) : (
                <HamburgerIcon color={"gold.500"} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            mr={3}
            spacing={8}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <a href="#">
              <Image boxSize={"70px"} objectFit={"cover"} src={gradCap} />
            </a>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink ref={link.ref} key={link.Name} name={link.Name} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}></Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink ref={link?.ref} key={link.Name} name={link.Name} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
