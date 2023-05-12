import { Flex, Link } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Contact = () => {
  return (
    <Flex gap="20px">
      <Flex
        justify="center"
        align="center"
        width="55px"
        h="55px"
        bg="white"
        borderRadius="18px"
        _hover={{
          bg: "blue.200",
        }}
      >
        <Link
          href="https://www.linkedin.com/in/ivan-bilvinas-5897331b7/"
          target="_blank"
        >
          <AiFillLinkedin
            style={{
              width: "45px",
              height: "45px",
            }}
          />
        </Link>
      </Flex>
      <Flex
        justify="center"
        align="center"
        width="55px"
        h="55px"
        bg="white"
        borderRadius="18px"
        _hover={{
          bg: "blue.200",
        }}
      >
        <Link href="https://github.com/ivanbvn" target="_blank">
          <AiFillGithub
            style={{
              width: "45px",
              height: "45px",
            }}
          />
        </Link>
      </Flex>
    </Flex>
  );
};
