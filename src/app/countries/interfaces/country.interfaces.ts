export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Europa = 'Europa',
  Oceania = 'Oceania',
}

export interface SmallCountry {
  name: string;
  cca3: string;
  borders: string[];
}

export interface Country {
  altSpellings: string[];
  area: number;
  borders?: string[];
  capital: string[];
  capitalInfo: CapitalInfo;
  car: Car;
  cca3: string;
  ccn3?: string;
  cioc?: string;
  coatOfArms: CoatOfArms;
  continents: string;
  demonyms: Demonyms;
  fifa?: string;
  flag: string;
  flags: Flags;
  gini?: { [key: string]: number };
  idd: Idd;
  independent?: boolean;
  landlocked: boolean;
  languages: { [key: string]: string };
  latlng: number[];
  maps: Maps;
  name: Name;
  population: number;
  postalCode?: PostalCode;
  region: string;
  startOfWeek: StartOfWeek;
  status: Status;
  subregion: Subregion;
  timezones: string[];
  translations: { [key: string]: Translation };
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  side: Side;
  signs: string[];
}

export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface TartuGecko {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  alt?: string;
  png: string;
  svg: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  nativeName: { [key: string]: Translation };
  official: string;
}

export interface Translation {
  common: string;
  official: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export enum StartOfWeek {
  Monday = 'monday',
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned',
}

export enum Subregion {
  CentralEurope = 'Central Europe',
  EasternEurope = 'Eastern Europe',
  NorthernEurope = 'Northern Europe',
  SoutheastEurope = 'Southeast Europe',
  SouthernEurope = 'Southern Europe',
  WesternEurope = 'Western Europe',
}
