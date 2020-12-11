import React from 'react';

import { 
  FontAwesome, 
  MaterialCommunityIcons, 
  Feather, 
  Ionicons,
  FontAwesome5
} from '@expo/vector-icons';

import { 
  Wrapper,
  TrainingConteiner, 
  Itens, 
  Title, 
  Score,
  ContentConteiner,
  IconsTop 
} from './styles';

export default function Evaluation(){
  return(
    <Wrapper>
      <TrainingConteiner>
        <Itens>
          <FontAwesome name="flag" size={24} color="#E84A5B" />
          <Title>Series</Title>
          <Score>0/1</Score>
        </Itens>
        
        <Itens>
          <Feather name="repeat" size={24} color="#E84A5B" />
          <Title>Repetições</Title>
          <Score>0/1</Score>
        </Itens>

        <Itens>
          <MaterialCommunityIcons name="weight-lifter" size={24} color="#E84A5B" />
          <Title>Peso</Title>
          <Score>0.00kg</Score>
        </Itens>

        <Itens>
          <MaterialCommunityIcons name="arm-flex" size={24} color="#E84A5B" />
          <Title>Máximo</Title>
          <Score>0.00kg</Score>
        </Itens>
      </TrainingConteiner>

      <ContentConteiner>
        <IconsTop>
          <Ionicons name="settings-sharp" size={24} color="#E84A5B" />

          <FontAwesome5 name="chart-area" size={24} color="#E84A5B" />
        </IconsTop>
      </ContentConteiner>
    </Wrapper>
  );
}