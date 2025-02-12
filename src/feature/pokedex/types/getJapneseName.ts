//GET https://pokeapi.co/api/v2/language/{id または名前}/
export interface LanguageInfo {
    name: string;
    url: string;
  }
  
export  interface NameEntry {
    name: string;
    language: LanguageInfo;
  }
  
export  interface LanguageData {
    id: number;
    name: string;
    official: boolean;
    iso639: string;
    iso3166: string;
    names: NameEntry[];
  }
  