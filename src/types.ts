export interface ContactInte {
  id: string;
  first_name: string;
  last_name: string;
  status: 'active' | 'inactive';
}


export interface WorldData {
  cases: number;
  deaths: number;
  recovered: number;
}

export interface CountryData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
  countryInfo:{lat:number,long:number,flag:string};
}

export interface HistoricalData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}
