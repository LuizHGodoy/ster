import {
  Box,
  Input,
  Stack,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { Search } from 'react-feather'

export const SearchBox = () => {
  return (
    <Box mx="1.563rem" mt="1.25rem" mb="2.5rem">
      <Box borderRadius={5} bgColor="gray.200">
        <Stack spacing={3}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Search size={16} />}
            />
            <Input
              placeholder="Pesquisar conversa "
              focusBorderColor="main.500"
            />
          </InputGroup>
        </Stack>
      </Box>
    </Box>
  )
}
