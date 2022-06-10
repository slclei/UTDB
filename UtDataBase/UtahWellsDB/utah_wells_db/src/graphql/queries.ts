/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWells = /* GraphQL */ `
  query GetWells($id: ID!) {
    getWells(id: $id) {
      api
      wellname
      operator
      operatorno
      fieldname
      ground_ele
      kelly_elev
      drkfloor_e
      coordssurf
      coordssu_1
      utmzone
      latitude
      longitude
      footagens
      dir_ns
      footageew
      dir_ew
      qtrqtr
      section
      township
      townshipdi
      range
      rangedir
      meridian
      county
      dir_horiz
      dir_vert
      dir_direct
      confidenti
      confreldat
      leasenumbe
      leasetype
      surfaceown
      abandondat
      wellstatus
      welltype
      totcum_oil
      totcum_gas
      totcum_wat
      indiantrib
      multi_lats
      originalfi
      unitname
      gisstatust
      origcompld
      jurisdicti
      forklift_h
      globalid
      extent
      formationtopdepths
      netpay
      netsand
      reportsid
      tdsnavajo
      tdswingate
      thickness
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWells = /* GraphQL */ `
  query ListWells(
    $filter: ModelWellsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWells(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        api
        wellname
        operator
        operatorno
        fieldname
        ground_ele
        kelly_elev
        drkfloor_e
        coordssurf
        coordssu_1
        utmzone
        latitude
        longitude
        footagens
        dir_ns
        footageew
        dir_ew
        qtrqtr
        section
        township
        townshipdi
        range
        rangedir
        meridian
        county
        dir_horiz
        dir_vert
        dir_direct
        confidenti
        confreldat
        leasenumbe
        leasetype
        surfaceown
        abandondat
        wellstatus
        welltype
        totcum_oil
        totcum_gas
        totcum_wat
        indiantrib
        multi_lats
        originalfi
        unitname
        gisstatust
        origcompld
        jurisdicti
        forklift_h
        globalid
        extent
        formationtopdepths
        netpay
        netsand
        reportsid
        tdsnavajo
        tdswingate
        thickness
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWells = /* GraphQL */ `
  query SyncWells(
    $filter: ModelWellsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWells(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        api
        wellname
        operator
        operatorno
        fieldname
        ground_ele
        kelly_elev
        drkfloor_e
        coordssurf
        coordssu_1
        utmzone
        latitude
        longitude
        footagens
        dir_ns
        footageew
        dir_ew
        qtrqtr
        section
        township
        townshipdi
        range
        rangedir
        meridian
        county
        dir_horiz
        dir_vert
        dir_direct
        confidenti
        confreldat
        leasenumbe
        leasetype
        surfaceown
        abandondat
        wellstatus
        welltype
        totcum_oil
        totcum_gas
        totcum_wat
        indiantrib
        multi_lats
        originalfi
        unitname
        gisstatust
        origcompld
        jurisdicti
        forklift_h
        globalid
        extent
        formationtopdepths
        netpay
        netsand
        reportsid
        tdsnavajo
        tdswingate
        thickness
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
