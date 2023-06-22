import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { questionsAndAnswers } from "../helpers";

export const FAQ = () => {
  return (
    <Accordion allowToggle w="500px" bg="blue.200" color="black">
      {questionsAndAnswers.map((item, index) => {
        return (
          <AccordionItem key={index}>
            <Text as="h2">
              <AccordionButton
                _expanded={{
                  bg: "blue.500",
                  color: "white",
                }}
              >
                <Box as="span" flex="1" textAlign="left">
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
