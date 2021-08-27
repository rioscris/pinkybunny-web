import { MoonIcon } from "@chakra-ui/icons";

import {
  Box,
  Flex,
  Center,
  Heading,
  Spacer,
  Divider,
  HStack,
  Text,
} from "@chakra-ui/react";

const MenuItem = (props) => (
  <Text
    fontSize="xl"
    style={{
      color: "white",
      fontFamily: "Varela Round",
      marginLeft: "0.2em",
      marginTop: 0,
      marginBottom: 0,
    }}
  >
    {props.children}
  </Text>
);

const MenuDivider = () => (
  <Divider orientation="vertical" borderColor="pink.200" />
);

export const Landing = (props) => (
  <Box>
    <Box
      boxShadow="0 5px 6px -6px #999"
      overflow="hidden"
      position="fixed"
      top="0"
      width="100%"
      padding="1em"
      backgroundColor="#FFE7E9"
    >
      <Flex>
        <Center>
          {/* <Image marginLeft={'1em'} marginRight={'1em'} src={PinkyLogo} alt="pinky" boxSize='3.5em' /> */}
          <MoonIcon color="pink.500" fontSize="2em" />
          <Heading
            size="lg"
            style={{
              color: "white",
              fontFamily: "Varela Round",
              marginLeft: "0.2em",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            PinkyBunny
          </Heading>
        </Center>
        <Spacer />
        <HStack>
          <MenuItem>Sobre mí</MenuItem>
          <MenuDivider />
          <MenuItem>Galería</MenuItem>
          <MenuDivider />
          <MenuItem>Comisiones</MenuItem>
          <MenuDivider />
          <MenuItem>Redes sociales</MenuItem>
          <MenuDivider />
          <MenuItem>Contacto</MenuItem>
        </HStack>
        <Spacer />
      </Flex>
    </Box>
    <Box paddingTop="5.5em">{props.children}</Box>
  </Box>
);

export default Landing;
