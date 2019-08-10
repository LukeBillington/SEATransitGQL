export interface IAgency {
  id: string;
  lat: string;
  lon: string;
  latSpan: string;
  lonSpan: string;
  name: string;
  url: string;
  timezone: string;
  lang?: string;
  phone?: string;
  privateService?: string;
  disclaimer?: string;
}
