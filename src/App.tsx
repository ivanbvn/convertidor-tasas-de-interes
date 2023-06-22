import {
  Box,
  Input,
  Select,
  Flex,
  Text,
  Button,
  InputGroup,
  InputLeftAddon,
  Heading,
  Image,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { capitalizaciones, tasas, tasasInfo } from "./helpers";
import { useTasas } from "./hooks";
import { Contact, FAQ, InfoButton } from "./components";

function App() {
  const {
    tasaType,
    tasa,
    tasaConvertida,
    capitalizacion,
    setTasa,
    handleCalculateButton,
    handleCleanButton,
    handleTasaSelected,
    handleCapitalizationSelected,
  } = useTasas();

  const buttonValidations = (): boolean => {
    return tasaType.recibida === "TNA"
      ? tasa && capitalizacion
        ? false
        : true
      : tasa
      ? false
      : true;
  };

  return (
    <Flex minH="100vh" direction="column" justify="space-between">
      <Flex direction="column" justify="center" gap="55px">
        <Flex direction="column" justify="center" gap="55px">
          <Flex direction="column" textAlign="center" align="center">
            <Text fontSize="4xl" as="b" m="10px 0" color="blue.600">
              Tasas 💰
            </Text>
            <Box maxW="750px" bg="blue.500" borderRadius="10px" m="0 5px">
              <Text color="gray.100" m="10px 0">
                <u>Tasas</u> es una aplicación diseñada para calcular
                equivalencias de tasas de interés y determinar la tasa efectiva
                de una operación considerando la capitalización de intereses.
              </Text>
            </Box>
          </Flex>
          <Flex justify="center">
            <Flex
              direction="column"
              w="380px"
              maxH="230px"
              justify="center"
              p="10px"
              bg="#ffffff"
              borderRadius="10px"
              m="0 5px"
            >
              <Flex gap="10px" direction="column" align="center">
                <Flex gap="5px">
                  <InputGroup>
                    <InputLeftAddon children="%" />
                    <Input
                      type="number"
                      size="md"
                      textAlign="center"
                      onChange={(event) => setTasa(event.target.value)}
                      value={tasa}
                    />
                  </InputGroup>
                  {tasaType.recibida === "TNA" ? (
                    <Flex direction="column" gap="10px">
                      <Flex gap="5px">
                        <Select
                          size="md"
                          w="120px"
                          onChange={handleTasaSelected}
                          name="recibida"
                          bg="gray.200"
                        >
                          {tasas.map((tasa, index) => (
                            <option value={tasa} key={index}>
                              {tasa}
                            </option>
                          ))}
                        </Select>
                        <InfoButton tasa={tasasInfo[tasaType.recibida]} />
                      </Flex>
                      <Flex>
                        <Select
                          size="md"
                          w="100%"
                          onChange={handleCapitalizationSelected}
                          bg="gray.200"
                          placeholder="Capitalización"
                          name="capitalizaciones"
                          value={capitalizacion}
                        >
                          {capitalizaciones.map((type, index) => (
                            <option value={type} key={index}>
                              {type}
                            </option>
                          ))}
                        </Select>
                      </Flex>
                    </Flex>
                  ) : (
                    <Flex direction="column" gap="5px">
                      <Flex gap="5px">
                        <Select
                          size="md"
                          w="120px"
                          onChange={handleTasaSelected}
                          name="recibida"
                          bg="gray.200"
                        >
                          {tasas.map((tasa, index) => (
                            <option value={tasa} key={index}>
                              {tasa}
                            </option>
                          ))}
                        </Select>
                        <InfoButton tasa={tasasInfo[tasaType.recibida]} />
                      </Flex>
                    </Flex>
                  )}
                </Flex>

                <Flex gap="5px" align="center">
                  <InputGroup>
                    <InputLeftAddon children="%" />
                    <Input
                      disabled={true}
                      value={tasaConvertida === 0 ? "" : tasaConvertida}
                      textAlign="center"
                      _disabled={{
                        color: "#797979",
                      }}
                    />
                  </InputGroup>
                  <Flex gap="5px">
                    <Select
                      size="md"
                      w="120px"
                      onChange={handleTasaSelected}
                      name="a_convertir"
                      bg="gray.200"
                    >
                      {tasas.map((tasa, index) =>
                        tasa === "TNA" ? (
                          ""
                        ) : (
                          <option value={tasa} key={index}>
                            {tasa}
                          </option>
                        )
                      )}
                    </Select>
                    <InfoButton tasa={tasasInfo[tasaType.a_convertir]} />
                  </Flex>
                </Flex>
              </Flex>

              <Flex mt="25px" justify="center" gap="10px">
                <Button
                  onClick={handleCalculateButton}
                  bg="blue.200"
                  _hover={{
                    bg: "blue.300",
                  }}
                  isDisabled={buttonValidations()}
                  _disabled={{
                    bg: "gray.200",
                    cursor: "default",
                  }}
                >
                  Calcular
                </Button>
                <Button
                  onClick={handleCleanButton}
                  bg="pink.200"
                  _hover={{
                    bg: "pink.300",
                  }}
                >
                  Limpiar
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="center" m="0 5px">
          <FAQ />
        </Flex>
      </Flex>
      <Flex direction="column" align="center" mb="10px" mt="50px">
        <Flex align="center" direction="column" w="250px" gap="15px">
          <Contact />
          <Flex>
            <Button
              as="a"
              href="https://github.com/ivanbvn/convertidor-tasas-de-interes"
              w="130px"
              bg="white"
              target="_blank"
              _hover={{
                bg: "blue.200",
              }}
            >
              Repositorio
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
