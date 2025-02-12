import React from 'react';
import { Card, CardMedia, CardContent, Typography,  } from '@mui/material';
import { PokemonCardData } from '../types/pokemonProps';

interface CardListProps {
  cardData:PokemonCardData;
}

export  const  CardList:React.FC<CardListProps> = ({
  cardData,
}) => {
  return (
          <Card>
            {/* カードの画像 */}
            <CardMedia
              component="img"
              alt={cardData.name}
              width={50}
              height={50}
              image={cardData.image}
              sx={{
                height: {
                  xs: '100px', // スモールスクリーンでは100px
                  sm: '300px', // ミディアムスクリーンでは150px
                  md: '500px', // ラージスクリーンでは200px
                },
                objectFit: 'contain',
              }}
            />
            {/* カードの内容 */}
            <CardContent sx={{width:'100%'}}>
              <Typography gutterBottom variant="h5" component="div">
                {cardData.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {cardData.description}
              </Typography>
            </CardContent>
          </Card>
  );
}

