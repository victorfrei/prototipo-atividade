import { Avatar,Image , Badge, Box, Button, ButtonGroup, Editable, EditableInput, EditablePreview, Flex, Grid, GridItem, IconButton, Input, InputGroup, InputLeftElement, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FiCheck, FiEdit, FiSearch, FiX } from "react-icons/fi";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react"



  function Video(props) {
    const property = {
      imgUrl: props.img,
      videoAlt: props.alt,
      views: props.views,
      likes: props.likes,
      title: props.title,
      }
  
    return (
      <Box margin="10px" maxW="2xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image w="100%" h="200px" src={property.imgUrl} alt={property.videoAlt} />
  
        <Box p="2">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.views} Visualizações &bull; {property.likes} Likes
            </Box>
          </Box>
  
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>
  
          </Box>
  
         
          </Box>
       
    )
  }




  function EditableControls({ isEditing, onSubmit, onCancel, onEdit }) {
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<FiCheck />} onClick={onSubmit} />
        <IconButton icon={<FiX />} onClick={onCancel} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<FiEdit />} onClick={onEdit} />
      </Flex>
    )
  }









export default function home(){

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    

     
    return (
        <Grid
        h="100vh"
        templateColumns="200px 1fr 60px"
        templateRows="50px 1fr"
        templateAreas='
        "navbar search  profile"
        "navbar content content"
        
        
        '
        >

<Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader><Avatar cursor="pointer" margin="0 85px" size="xl" name="Victor Frei" src="#" /></DrawerHeader>
      
                  <DrawerBody>
                  <Editable
      textAlign="center"
      defaultValue="Victor Frei"
      fontSize="2xl"
      isPreviewFocusable={false}
      submitOnBlur={false}
    >
      {(props) => (
        <>
          <EditablePreview />
          <EditableInput />
          <EditableControls {...props} />
        </>
      )}
    </Editable>
                  </DrawerBody>
      
                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      cancelar
                    </Button>
                    <Button color="blue">salvar</Button>
                  </DrawerFooter>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>

        <GridItem id="navbar"
        bg="tomato"
        gridArea="navbar"
         
        >
           

        </GridItem>    


        <GridItem
       margin="10px 0 0 0"
       gridArea="search"
        
        >
    <InputGroup >
    <InputLeftElement
      pointerEvents="none"
      children={<FiSearch width="100%" color="gray.500" />}
    />
    <Input w="40%"  type="text" placeholder="Buscar" />
    </InputGroup>
    </GridItem>




    <GridItem
        margin="10px 0 0 0"
        gridArea="profile"
        
        >
    <Avatar cursor="pointer" ref={btnRef} onClick={onOpen} size="sm" name="Victor Frei" src="#" />
    </GridItem>
    
     <GridItem
      gridArea="content"
    display="flex"
    flexWrap="Wrap"
     >
         <Video img="/imgs/js.png" alt="javascript" likes="50" views="1000" title="Javascript Básico" ></Video>
         <Video img="/imgs/css.jpg" alt="javascript" likes="50" views="1000" title="CSS Básico" ></Video>
         <Video img="/imgs/java.jpg" alt="javascript" likes="50" views="1000" title="Java Básico" ></Video>
         <Video img="/imgs/c.png" alt="javascript" likes="50" views="1000" title="C Básico" ></Video>
         <Video img="/imgs/py.jpg" alt="javascript" likes="50" views="1000" title="Pyton Básico" ></Video>
         <Video img="/imgs/ruby.png" alt="javascript" likes="50" views="1000" title="Ruby on Rails Básico" ></Video>
         <Video img="/imgs/js.png" alt="javascript" likes="50" views="1000" title="Javascript Básico" ></Video>
         <Video img="/imgs/css.jpg" alt="javascript" likes="50" views="1000" title="CSS Básico" ></Video>
         <Video img="/imgs/java.jpg" alt="javascript" likes="50" views="1000" title="Java Básico" ></Video>
         <Video img="/imgs/c.png" alt="javascript" likes="50" views="1000" title="C Básico" ></Video>
         <Video img="/imgs/py.jpg" alt="javascript" likes="50" views="1000" title="Pyton Básico" ></Video>
         <Video img="/imgs/ruby.png" alt="javascript" likes="50" views="1000" title="Ruby on Rails Básico" ></Video>
         <Video img="/imgs/js.png" alt="javascript" likes="50" views="1000" title="Javascript Básico" ></Video>
         <Video img="/imgs/css.jpg" alt="javascript" likes="50" views="1000" title="CSS Básico" ></Video>
         <Video img="/imgs/java.jpg" alt="javascript" likes="50" views="1000" title="Java Básico" ></Video>
         <Video img="/imgs/c.png" alt="javascript" likes="50" views="1000" title="C Básico" ></Video>
         <Video img="/imgs/py.jpg" alt="javascript" likes="50" views="1000" title="Pyton Básico" ></Video>
         <Video img="/imgs/ruby.png" alt="javascript" likes="50" views="1000" title="Ruby on Rails Básico" ></Video>
         <Video img="/imgs/js.png" alt="javascript" likes="50" views="1000" title="Javascript Básico" ></Video>
         <Video img="/imgs/css.jpg" alt="javascript" likes="50" views="1000" title="CSS Básico" ></Video>
         <Video img="/imgs/java.jpg" alt="javascript" likes="50" views="1000" title="Java Básico" ></Video>
         <Video img="/imgs/c.png" alt="javascript" likes="50" views="1000" title="C Básico" ></Video>
         <Video img="/imgs/py.jpg" alt="javascript" likes="50" views="1000" title="Pyton Básico" ></Video>
         <Video img="/imgs/ruby.png" alt="javascript" likes="50" views="1000" title="Ruby on Rails Básico" ></Video>
         
     </GridItem>   


    </Grid>
    )
    
}