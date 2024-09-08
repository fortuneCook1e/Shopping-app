import { Container, VStack, Text, SimpleGrid} from '@chakra-ui/react'
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {fetchProducts()}, [fetchProducts]);
  console.log('Products: ', products);
  
  return (
    <Container maxW={'conteiner.xl'} py={12}>
      <VStack spacing={8}>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize={{base:"22", sm:"28"}}
          textAlign="center"
          textTransform="uppercase"
          fontWeight='extrabold'
        >
          Current Products
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={'full'}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
          

        </SimpleGrid>

        {(products.length === 0) && (
          <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
          No Products Found {' '}
          {/* remember to import Link from react-router-dom instead of chakra-ui */}
          <Link to={"/create"}>
            <Text as={'span'} color={'blue.500'} _hover={{textDecoration: 'underline'}}>Create a Product</Text>
          </Link>
          </Text>
        )}

        
      </VStack>

    </Container>
  )
}

export default HomePage