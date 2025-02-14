'use client'
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPokeData, getPokemonSpecies } from "../api/getPokeData";
import DetailInfoList, { detailDataProps } from "../component/DetailInfoList";
import { dittoDescription, dittoId, dittoImageUrl, dittoJaName } from "../constants/ditto";
import { Pokemon } from "../types/pokemonInfo";
import { PokemonCardData } from "../types/pokemonProps";
import { FlavorTextEntry, NameEntry, PokemonSpecies } from "../types/pokemonSpacies";

const DetailPresentation:React.FC = () => {
    //クエリパラメーターの受け渡し
    const searchParams = useSearchParams();
    const id = searchParams.get("id"); // クエリパラメーターを取得

    //状態管理
    const [rightDisplayData,setRightDisplayData] = useState<detailDataProps[]>([]);
    const [leftDisplayData,setLeftDisplayData] = useState<detailDataProps[]>([]);

  const [pokeId,setPokeId] = useState<number>(dittoId);
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
    
    const pokemonDescriptionResult = pokemonDescription ? pokemonDescription.flavor_text :dittoDescription;
    const pokemonJaNameResult = pokemonJaName ? pokemonJaName.name : dittoJaName;
    const result ={
      name:pokemonJaNameResult,
      description:pokemonDescriptionResult,
      image:pokemonData.sprites.front_default ? pokemonData.sprites.front_default : dittoImageUrl,
    }

    const TempRightDisplayData:detailDataProps[] = [
        {title:"図鑑No:",item:String(pokemonSpecies.pokedex_numbers[0].entry_number).padStart(3, '0')},
        {title:'',item:pokemonJaNameResult},
    ];

    const TempLeftDisplayData:detailDataProps[]  = [
        {title:'',item:pokemonDescriptionResult}
    ];

    setRightDisplayData(TempRightDisplayData);
    setLeftDisplayData(TempLeftDisplayData);
    setPokeCardData(result);
  }

  //useEffect
    useEffect(()=>{
      createPokemonCardData();
    },[])

    useEffect(()=>{
        if(!isNaN(Number(id))){
            setPokeId(Number(id));
        }
    },[id])

  return (
    <div>
      <Box sx={{
        marginTop:'50px',
        }}>
        <Grid container spacing={0}>
            <Grid size={4} sx={{display:'flex',justifyContent: 'flex-end' }}>
                <DetailInfoList data={rightDisplayData}/>
            </Grid>
            <Grid size={4}>
                <Box sx={{
                    display: 'flex' , 
                    flexDirection: 'row' ,
                    justifyContent: 'space-evenly',
                    height:'auto',
                    width:'100%',
                    alignItems: 'center',
                    marginTop:'50px',
                    }}>
                <Image
                    src={PokeCardData.image} // 必須
                    width={500}              // 必須
                    height={500}             // 必須
                    alt={PokeCardData.name}
                    style={{padding:'0px'}}
                />
                </Box>
            </Grid>
            <Grid size={4} sx={{display:'flex',justifyContent: 'flex-start' }}>
                <DetailInfoList data={leftDisplayData} />
            </Grid>
        </Grid>
      </Box> 
    </div>
  )
}

export default DetailPresentation
