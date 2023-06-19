import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface Props {
  tasa: {
    name: string;
    info: string;
  };
}

export const InfoButton = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        bg="yellow.200"
        p="0px"
        _hover={{
          bg: "yellow.300",
        }}
        onClick={onOpen}
      >
        <RiInformationLine size="35px" color="black" />
      </Button>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{props.tasa.name}</ModalHeader>
          <ModalBody textAlign="center">{props.tasa.info}</ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              onClick={onClose}
              bg="red.200"
              _hover={{
                bg: "red.300",
              }}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
