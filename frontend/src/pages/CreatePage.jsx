import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'
import { useToast } from '@chakra-ui/react'

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  })

  const {createProduct} = useProductStore();

  const toast = useToast();

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct)
    if (!success) {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    } else{
      toast({
        title: 'Success',
        description: message,
        status:'success',
        duration: 4000,
        isClosable: true,
      })
      // reset the state after created new product
      setNewProduct({name: '', price: '', image: ''})
    }
  }

  return (
    <Container maxW={'container.sm'}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={'2xl'} textAlign={'center'} mb={8}>Create New Product</Heading>

        <Box w={'full'} background={useColorModeValue('white', 'gray.700')} p={6} rounded={'lg'} shadow={'md'}>
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              value={newProduct.name}
              name='name'
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value })}
            />
            <Input
              placeholder="Price"
              type='number'
              value={newProduct.price}
              name='Price'
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value })}
            />
            <Input
              placeholder="Image URL"
              value={newProduct.image}
              name='image'
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value })}
            />
            <Button colorScheme='blue' onClick={handleAddProduct} w={'full'}>Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage