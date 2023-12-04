import {
    Box, Flex, FormControl, FormLabel, Button, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Input,
    Select,
    Heading
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userpost } from "../redux/Action";
function Appointment() {
    const dispatch = useDispatch();
    const data= useSelector((state) => state.contacts);
    const toast = useToast()
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [number, setNumber]= useState("")
    const [sele, setSele]= useState("")
    const HandleSubmit=()=>{
        let obj={
            name,
            email,
            number,
            sele
        }
        try {
            useEffect(()=>{
                dispatch(userpost(obj))
            },[dispatch])
            toast({
                title: 'Added',
                description: "",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        } catch (error) {
            toast({
                title: 'error occured',
                description: "",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        
        
    }
    return (
        <Flex width={"100%"} justifyContent={"space-around"} padding={"30px"} height={"100vh"} >
            <Box width={"30%"}>
                <Heading>add data</Heading>
                <FormControl margin={"auto"} border={"4px solid teal"} borderRadius={"10px"} padding={"10px"}>
                    <Input type="text" placeholder="Full Name" marginTop={"20px"} onChange={(e)=>{setName(e.target.value)}}></Input>
                    <Input type="email" placeholder="Email" marginTop={"20px"} onChange={(e)=>{setEmail(e.target.value)}}></Input>
                    <Input type="Number" placeholder="Phone Number" marginTop={"20px"} onChange={(e)=>{setNumber(e.target.value)}}></Input>
                    <Select marginTop={"20px"} onChange={(e)=>{setSele(e.target.value)}}>
                        <option value='work'>work</option>
                        <option value='school'>school</option>
                        <option value='friends'>friends</option>
                        <option value='family'>family</option>
                    </Select>
                    <Button marginTop={"50px"} backgroundColor={"teal"} onClick={HandleSubmit}>Add</Button>
                </FormControl>

            </Box>
            <Box width={"60%"}>
            <TableContainer>
                <Table variant={"striped"}>
                    
                    <Thead>
                        <Tr>
                            <Th>Full name</Th>
                            <Th>E-mail</Th>
                            <Th>Number</Th>
                            <Th>Label</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {/* {data.map((item)=>(

                            <Tr>
                            <Td>{item.name}</Td>
                            <Td>{item.email}</Td>
                            <Td >{item.number}</Td>
                            <Td>{item.email}</Td>
                            <Td></Td>
                            </Tr>
                        )

                        )
                            
                        } */}
                         
                       
                    </Tbody>
                    
                </Table>
            </TableContainer>
            </Box>
            
        </Flex>
    );
}

export default Appointment;