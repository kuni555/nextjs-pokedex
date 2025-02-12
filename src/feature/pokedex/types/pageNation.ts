
export interface Ability {
    name: string;
    url: string;
  }
  
  export interface PageNation {
    count: number;
    next: string;
    previous: string | null;
    results: Ability[];
  }
  
  export interface PageNationRequest {
    limit:number,
    offset:number
  }