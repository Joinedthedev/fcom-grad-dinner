import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

const FAQAccordion = () => {
  const faqItems = [
    {
      question: "How much does it cost?",
      answer: "Entry costs N25,000 due to the late fee as of June 23",
    },
    {
      question: "How do I pay?",
      answer:
        "Scroll up and tap the pay now button. You'll be redirected to WhatsApp where you can transfer and pay. Just indicate that you want to pay for the dinner, then send your receipt All done!",
    },
    {
      question: "Who's allowed to attend?",
      answer: "400 lvl students only!",
    },
    {
      question:
        "What's the dress code again? Why can't I wear Khaftan or atampa?",
      answer:
        "The dress code for Men is suit and tie and dress or gown for women. Anything else goes against the dress code. We can't wear atampa and khaftan because it goes against the theme of the dinner!"
    },
    {
      question: "When is the event? What time does it start?",
      answer: "Saturday July 6th at 4pm.",
    },
    {
      question: "Can I bring a plus one?",
      answer: "Yes! But only if they are in 400 LVL",
    },
  ];

  return (
    <Accordion id="accord" bgColor={"#D1C8B5"} color={"green.500"} allowToggle>
      {faqItems.map((item, index) => (
        <AccordionItem bg={"#D1C8B5"} key={index}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {item.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
