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
import { tasas } from "./helpers";
import { useForm } from "./hooks";
import { Contact } from "./components";

function App() {
  const {
    tasa,
    tasaConvertida,
    setTasa,
    handleCalculateButton,
    handleCleanButton,
    handleTasaSelected,
  } = useForm();

  return (
    <Flex h="100%" justify="space-around" direction="column">
      <Flex direction="column" justify="center">
        <Flex justify="center" mb="25px">
          <Text fontSize="5xl">Convertidor de Tasas de Interes</Text>
        </Flex>
        <Flex justify="center">
          <Flex
            direction="column"
            w="350px"
            h="200px"
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
                <Box>
                  <Select
                    size="md"
                    w="90px"
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
                </Box>
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
                <Box>
                  <Select
                    size="md"
                    w="90px"
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
                </Box>
              </Flex>
            </Flex>

            <Flex mt="25px" justify="center" gap="10px">
              <Button onClick={handleCalculateButton}>Calcular</Button>
              <Button
                onClick={handleCleanButton}
                bg="pink.300"
                _hover={{
                  bg: "pink.400",
                }}
              >
                Limpiar
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex justify="center">
        <Contact />
      </Flex>
    </Flex>
  );
}

export default App;
