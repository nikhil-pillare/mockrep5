import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Nav() {
    return (
      <Flex width={"100%"} justifyContent={"space-around"} height={"70px"} bg={"teal"} alignItems={"center"}>
          <Link to={"/"}>Contact Management</Link>
          <Link to={"/contact"}>Appointment</Link>
      </Flex>
    );
  }
  
  export default Nav;