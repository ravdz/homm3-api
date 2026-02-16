export enum ResourceCode {
  Gold = 'GOLD',
  Wood = 'WOOD',
  Ore = 'ORE',
  Gems = 'GEMS',
  Mercury = 'MERCURY',
  Sulfur = 'SULFUR',
  Crystal = 'CRYSTAL',
}

export interface Resource {
  id: number;
  name: string;
  code: ResourceCode;
}

export const RESOURCES: Resource[] = [
  { id: 1, name: 'Gold', code: ResourceCode.Gold },
  { id: 2, name: 'Wood', code: ResourceCode.Wood },
  { id: 3, name: 'Ore', code: ResourceCode.Ore },
  { id: 4, name: 'Gems', code: ResourceCode.Gems },
  { id: 5, name: 'Mercury', code: ResourceCode.Mercury },
  { id: 6, name: 'Sulfur', code: ResourceCode.Sulfur },
  { id: 7, name: 'Crystal', code: ResourceCode.Crystal },
];

export const RESOURCES_BY_ID = new Map(RESOURCES.map((r) => [r.id, r]));
export const RESOURCES_BY_CODE = new Map(RESOURCES.map((r) => [r.code, r]));
