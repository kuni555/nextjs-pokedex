//GET https://pokeapi.co/api/v2/pokemon/{id または名前}/
export interface NamedAPIResource {
    name: string;
    url: string;
  }
  
  export interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
  }
  
  export interface VersionGameIndex {
    game_index: number;
    version: NamedAPIResource;
  }
  
  export interface PokemonHeldItemVersion {
    rarity: number;
    version: NamedAPIResource;
  }
  
  export interface PokemonHeldItem {
    item: NamedAPIResource;
    version_details: PokemonHeldItemVersion[];
  }
  
  export interface PokemonMoveVersion {
    level_learned_at: number;
    version_group: NamedAPIResource;
    move_learn_method: NamedAPIResource;
  }
  
  export interface PokemonMove {
    move: NamedAPIResource;
    version_group_details: PokemonMoveVersion[];
  }
  
  export interface PokemonSprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;//画像URL
    front_shiny_female: string | null;
  }
  
  export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
  }
  
  export interface PokemonType {
    slot: number;
    type: NamedAPIResource;
  }
  
  export interface PokemonPastType {
    generation: NamedAPIResource;
    types: PokemonType[];
  }
  
  export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    species: NamedAPIResource;
    sprites: PokemonSprites;
    cries: {
      latest: string;
      legacy: string;
    };
    stats: PokemonStat[];
    types: PokemonType[];
    past_types: PokemonPastType[];
  }
  