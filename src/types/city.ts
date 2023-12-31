export interface ICityLookup {
  Version: number;
  Key: string;
  Type: 'City';
  Rank: number;
  LocalizedName: string;
  Country: AdministrativeArea;
  AdministrativeArea: AdministrativeArea;
}

export interface AdministrativeArea {
  ID: string;
  LocalizedName: string;
}
