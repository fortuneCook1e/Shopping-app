import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  })

  const handleAddProduct = () => {
    // Add new product to the database
    console.log(newProduct)
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