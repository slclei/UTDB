import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type WellsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Wells {
  readonly id: string;
  readonly api: string;
  readonly wellname: string;
  readonly operator?: string | null;
  readonly operatorno?: number | null;
  readonly fieldname?: string | null;
  readonly ground_ele?: string | null;
  readonly kelly_elev?: string | null;
  readonly drkfloor_e?: string | null;
  readonly coordssurf?: string | null;
  readonly coordssu_1?: string | null;
  readonly utmzone?: number | null;
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  readonly footagens?: number | null;
  readonly dir_ns?: string | null;
  readonly footageew?: number | null;
  readonly dir_ew?: string | null;
  readonly qtrqtr?: string | null;
  readonly section?: number | null;
  readonly township?: string | null;
  readonly townshipdi?: string | null;
  readonly range?: string | null;
  readonly rangedir?: string | null;
  readonly meridian?: string | null;
  readonly county?: string | null;
  readonly dir_horiz?: string | null;
  readonly dir_vert?: string | null;
  readonly dir_direct?: string | null;
  readonly confidenti?: string | null;
  readonly confreldat?: string | null;
  readonly leasenumbe?: string | null;
  readonly leasetype?: string | null;
  readonly surfaceown?: string | null;
  readonly abandondat?: string | null;
  readonly wellstatus?: string | null;
  readonly welltype?: string | null;
  readonly totcum_oil?: string | null;
  readonly totcum_gas?: string | null;
  readonly totcum_wat?: string | null;
  readonly indiantrib?: string | null;
  readonly multi_lats?: number | null;
  readonly originalfi?: string | null;
  readonly unitname?: string | null;
  readonly gisstatust?: string | null;
  readonly origcompld?: string | null;
  readonly jurisdicti?: string | null;
  readonly forklift_h?: string | null;
  readonly globalid?: string | null;
  readonly extent?: string | null;
  readonly formationtopdepths?: number | null;
  readonly netpay?: string | null;
  readonly netsand?: string | null;
  readonly reportsid?: string | null;
  readonly tdsnavajo?: string | null;
  readonly tdswingate?: string | null;
  readonly thickness?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Wells, WellsMetaData>);
  static copyOf(source: Wells, mutator: (draft: MutableModel<Wells, WellsMetaData>) => MutableModel<Wells, WellsMetaData> | void): Wells;
}