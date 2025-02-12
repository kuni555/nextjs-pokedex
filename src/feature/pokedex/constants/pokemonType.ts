export const PokemonTypes:PokemonTypesInterface[] = [
    { id: 1, name: "normal", japaneseName: "ノーマル" },
    { id: 2, name: "fighting", japaneseName: "かくとう" },
    { id: 3, name: "flying", japaneseName: "ひこう" },
    { id: 4, name: "poison", japaneseName: "どく" },
    { id: 5, name: "ground", japaneseName: "じめん" },
    { id: 6, name: "rock", japaneseName: "いわ" },
    { id: 7, name: "bug", japaneseName: "むし" },
    { id: 8, name: "ghost", japaneseName: "ゴースト" },
    { id: 9, name: "steel", japaneseName: "はがね" },
    { id: 10, name: "fire", japaneseName: "ほのお" },
    { id: 11, name: "water", japaneseName: "みず" },
    { id: 12, name: "grass", japaneseName: "くさ" },
    { id: 13, name: "electric", japaneseName: "でんき" },
    { id: 14, name: "psychic", japaneseName: "エスパー" },
    { id: 15, name: "ice", japaneseName: "こおり" },
    { id: 16, name: "dragon", japaneseName: "ドラゴン" },
    { id: 17, name: "dark", japaneseName: "あく" },
    { id: 18, name: "fairy", japaneseName: "フェアリー" },
  ];


export interface PokemonTypesInterface{
        id: number;
        name: string;
        japaneseName: string;
}