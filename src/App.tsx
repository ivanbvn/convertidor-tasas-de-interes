import {
  Box,
  Input,
  Select,
  Flex,
  Text,
  Button,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { capitalizaciones, tasas, tasasInfo } from "./helpers";
import { useTasas } from "./hooks";
import { Contact, InfoButton } from "./components";

function App() {
  const {
    tasaType,
    tasa,
    tasaConvertida,
    setTasa,
    handleCalculateButton,
    handleCleanButton,
    handleTasaSelected,
    handleCapitalizationSelected,
  } = useTasas();

  return (
    <Flex h="100%" justify="space-evenly" direction="column">
      <Flex direction="column" justify="center">
        <Flex justify="center" mb="25px" textAlign="center">
          <Text fontSize="5xl">Convertidor de Tasas de Interes</Text>
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
      <Flex direction="column" align="center">
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
