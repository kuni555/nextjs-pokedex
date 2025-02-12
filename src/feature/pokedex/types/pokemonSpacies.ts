//GET https://pokeapi.co/api/v2/pokemon-species/{id or name}/
export interface NamedAPIResource {
    name: string;
    url: string;
  }
  
  export interface PokedexNumber {
    entry_number: number;
    pokedex: NamedAPIResource;
  }
  
  export interface NameEntry {
    name: string;
    language: NamedAPIResource;
  }
  
  export interface FlavorTextEntry {
    flavor_text: string;
    language: NamedAPIResource;
    version: NamedAPIResource;
  }
  
  export interface FormDescription {
    description: string;
    language: NamedAPIResource;
  }
  
  export interface Genera {
    genus: string;
    language: NamedAPIResource;
  }
  
  export interface PokemonVariety {
    is_default: boolean;
    pokemon: NamedAPIResource;
  }
  
  export interface PokemonSpecies {
    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    hatch_counter: number;
    has_gender_differences: boolean;
    forms_switchable: boolean;
    growth_rate: NamedAPIResource;
    pokedex_numbers: PokedexNumber[];
    egg_groups: NamedAPIResource[];
    color: NamedAPIResource;
    shape: NamedAPIResource;
    evolves_from_species: NamedAPIResource;
    evolution_chain: NamedAPIResource;
    habitat: NamedAPIResource | null;
    generation: NamedAPIResource;
    names: NameEntry[];
    flavor_text_entries: FlavorTextEntry[];
    form_descriptions: FormDescription[];
    genera: Genera[];
    varieties: PokemonVariety[];
}