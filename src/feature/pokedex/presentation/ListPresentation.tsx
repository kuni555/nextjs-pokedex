'use client'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getPokeData, getPokemonSpecies } from '../api/getPokeData';
import { CardList } from '../component/CardList';
import { dittoDescription, dittoImageUrl, dittoJaName } from '../constants/ditto';
import { Pokemon } from '../types/pokemonInfo';
import { PokemonCardData } from '../types/pokemonProps';
import { FlavorTextEntry, NameEntry, PokemonSpecies } from '../types/pokemonSpacies';

const ListPresentation = () => {

  const [pokeId,setPokeId] = useState<number>(1);
  const [PokeCardData,setPokeCardData] = useState<PokemonCardData>({
    name:dittoJaName,
    description:dittoDescription,
    image:dittoImageUrl
  })

  const createPokemonCardData = async ():Promise<void> => {
    const pokemonData:Pokemon = await getPokeData(pokeId);
    const pokemonSpecies:PokemonSpecies = await getPokemonSpecies(pokeId);
    const pokemonDescription = pokemonSpecies.flavor_text_entries.find((value:FlavorTextEntry)  => {
      const language = value.language.name;
      return language == "ja-Hrkt";
    })
    const pokemonJaName = pokemonSpecies.names.find((value:NameEntry)  => {
      const language = value.language.name;
      return language == "ja-Hrkt";
    })
    const result = {
      name:pokemonJaName ? pokemonJaName.name : dittoJaName,
      description:pokemonDescription ? pokemonDescription.flavor_text :dittoDescription,
      image:pokemonData.sprites.front_default ? pokemonData.sprites.front_default : dittoImageUrl,
    }

    setPokeCardData(result);
  }

  const handleAddId = () =>{
    if(pokeId < 1050){
      setPokeId(prevId=>prevId+1)
    }
    return;
  }

  const handleReduceId = () =>{
    if(pokeId > 1){
      setPokeId(prevId=>prevId-1);
    }
    return;
  }
  
  useEffect(()=>{
    createPokemonCardData();
  },[pokeId])

  return (
    <div>
      <Box sx={{
        with:'100%',
        display: 'flex' , 
        flexDirection: 'row' ,
        justifyContent: 'center',
        marginTop: '10px',
        }}>
      <Box sx={{
        display: 'flex' , 
        flexDirection: 'row' ,
        justifyContent: 'space-evenly',
        height:'auto',
        width:'100%',
        alignItems: 'center' 
        }}>
        <Button variant="contained" onClick={handleReduceId} sx={{height: '10%',margin:'10px'}}>
          <ArrowBackIosIcon /><Typography sx={{padding:'5px'}}>前のポケモン</Typography>
        </Button>
        <CardList
          cardData={PokeCardData}
          pokeId={pokeId}
        />
        <Button variant="contained" onClick={handleAddId} sx={{height: '10%',margin:'10px'}}>
        <Typography sx={{padding:'5px'}}>次のポケモン</Typography><ArrowForwardIosIcon/>
        </Button>
      </Box>
      </Box>
    </div>
  )
}

export default ListPresentation
