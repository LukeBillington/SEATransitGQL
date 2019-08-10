export interface IRoute {
  id: string;
  shortName?: string;
  longName?: string;
  description?: string;
  type: string;
  url?: string;
  color?: string;
  textColor?: string;
  agencyId: string;
}
