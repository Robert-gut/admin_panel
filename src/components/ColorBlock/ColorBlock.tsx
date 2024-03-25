import { Box } from '@mui/material'
import { styleBox, styleContainer } from '../../Types/sx'
import { childrenProps } from '../../Types/interface'


export const ColorBlock: React.FC<childrenProps> = ({ boxChildren, containerChild, yourStyleBox, yourStyleContainer }) => {

   return (
      <Box sx={{ ...styleBox, ...yourStyleBox }}>
         <Box sx={{ ...styleContainer, ...yourStyleContainer }}>
            {containerChild}
         </Box>
         {boxChildren}
      </Box>
   )
}
