import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const Itenary = () => {
  return (
    <>
      <Heading>Itenary/Order of Events</Heading>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Please come on time!</TableCaption>
          <Thead>
            <Th> Event</Th>
            <Th> Time</Th>
          </Thead>

          <Tbody>
            <Tr>
              <Td> Red Carpet</Td>
              <Td>4:00pm-5:00pm</Td>
            </Tr>

            <Tr>
              <Td> Opening Remarks + Appreciation</Td>
              <Td>5:30pm</Td>
            </Tr>

            <Tr>
              <Td> Meals Start</Td>
              <Td>5:45pm</Td>
            </Tr>

            <Tr>
              <Td> Ice Breaker Game</Td>
              <Td>6:00pm</Td>
            </Tr>

            <Tr>
              <Td>Best Dressed Nomination</Td>
              <Td>6:40pm</Td>
            </Tr>

            <Tr>
              <Td>Prayer Time/Game 2</Td>
              <Td>6:40pm-7:00pm</Td>
            </Tr>

            <Tr>
              <Td> Award Ceremony</Td>
              <Td>7:05pm</Td>
            </Tr>

            <Tr>
              <Td> Closing Remark</Td>
              <Td>8:00pm</Td>
            </Tr>

            <Tr>
              <Td> After Party</Td>
              <Td>8:05pm</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Itenary;
