import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
        bg={'black'}
        color={'white'}
        mt={'10px'}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <img width={'200px'} height={'100px'} src="https://companieslogo.com/img/orig/swiggy_BIG.D-0088d1da.png?t=1720244494" alt="Swiggy" />
            </Box>
            <Text fontSize={'sm'}>© 2024 Swiggy. Swiggy Karo, Phir Jo Chahe Karo!</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'#'}>
              About
            </Box>
            <Box as="a" href={'#'}>
              Team
            </Box>
            <Box as="a" href={'#'}>
              Careers
            </Box>
            <Box as="a" href={'#'}>
              Swiggy One
            </Box>
            <Box as="a" href={'#'}>
              Swiggy Instamart
            </Box>
            <Box as="a" href={'#'}>
              Swiggy Genie
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Contact us</ListHeader>
            <Box as="a" href={'#'}>
              Help & Support
            </Box>
            <Box as="a" href={'#'}>
              Partner with us
            </Box>
            <Box as="a" href={'#'}>
              Ride with us
            </Box>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={'#'}>
              Terms & Conditions
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Cookie Policy
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Investor Relation
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>We deliver to:</ListHeader>
            <Box as="a" href={'#'}>
              Bangalore
            </Box>
            <Box as="a" href={'#'}>
              Gurgaon
            </Box>
            <Box as="a" href={'#'}>
              Hyderabad
            </Box>
            <Box as="a" href={'#'}>
              Delhi
            </Box>
            <Box as="a" href={'#'}>
              Mumbai
            </Box>
            <Box as="a" href={'#'}>
              Pune
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}