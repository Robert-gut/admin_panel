import React from 'react';
import { ColorBlock } from '../../components/ColorBlock/ColorBlock';
import { Color } from '../../components/Types/enum';


export const Login: React.FC = () => {
   const stBox = {
      width: '50%',
      fontFamily: 'Open Sans'
   };
   const stContainer = {
      'backgroundColor': Color.Purple
   };

   return (
      <ColorBlock boxChildren={<h2 >Children 1</h2>} containerChild={<h2>Login</h2>} yourStyleBox={stBox} yourStyleContainer={stContainer} />
   );
};

