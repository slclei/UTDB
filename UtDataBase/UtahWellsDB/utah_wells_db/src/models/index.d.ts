import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type WellsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Wells {
  readonly id: string;
  readonly api: string;
  readonly wellName: string;
  readonly operator?: string | null;
  readonly operatorNo?: number | null;
  readonly fieldName?: string | null;
  readonly groundElev?: string | null;
  readonly kellyElev?: string | null;
  readonly drkFloorElev?: string | null;
  readonly coordsSurfN?: string | null;
  readonly coordsSurfE?: string | null;
  readonly utm?: number | null;
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  readonly footageNS?: number | null;
  readonly dirNS?: string | null;
  readonly footageEW?: string | null;
  readonly dirEW?: string | null;
  readonly qtrQtr?: string | null;
  readonly section?: number | null;
  readonly township?: string | null;
  readonly townshipDir?: string | null;
  readonly range?: string | null;
  readonly rangeDir?: string | null;
  readonly meridian?: string | null;
  readonly county?: string | null;
  readonly dirHoriz?: string | null;
  readonly dirVert?: string | null;
  readonly dirDirect?: string | null;
  readonly confidential?: string | null;
  readonly confRelDate?: string | null;
  readonly leaseNumber?: string | null;
  readonly leaseType?: string | null;
  readonly surfaceOwner?: string | null;
  readonly abandonDate?: string | null;
  readonly wellStatus?: string | null;
  readonly totCumOil?: string | null;
  readonly totCumGas?: string | null;
  readonly totCumWater?: string | null;
  readonly indianTribe?: string | null;
  readonly multiLats?: number | null;
  readonly origianlField?: string | null;
  readonly unitName?: string | null;
  readonly gisstatusType?: string | null;
  readonly origComplDate?: string | null;
  readonly jurisdiction?: string | null;
  readonly tdsnavajo?: string | null;
  readonly tdswingate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Wells, WellsMetaData>);
  static copyOf(source: Wells, mutator: (draft: MutableModel<Wells, WellsMetaData>) => MutableModel<Wells, WellsMetaData> | void): Wells;
}