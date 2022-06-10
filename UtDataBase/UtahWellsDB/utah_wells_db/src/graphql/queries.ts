/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWells = /* GraphQL */ `
  query GetWells($id: ID!) {
    getWells(id: $id) {
      api
      wellName
      operator
      operatorNo
      fieldName
      groundElev
      kellyElev
      drkFloorElev
      coordsSurfN
      coordsSurfE
      utm
      latitude
      longitude
      footageNS
      dirNS
      footageEW
      dirEW
      qtrQtr
      section
      township
      townshipDir
      range
      rangeDir
      meridian
      county
      dirHoriz
      dirVert
      dirDirect
      confidential
      confRelDate
      leaseNumber
      leaseType
      surfaceOwner
      abandonDate
      wellStatus
      totCumOil
      totCumGas
      totCumWater
      indianTribe
      multiLats
      origianlField
      unitName
      gisstatusType
      origComplDate
      jurisdiction
      tdsnavajo
      tdswingate
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
        wellName
        operator
        operatorNo
        fieldName
        groundElev
        kellyElev
        drkFloorElev
        coordsSurfN
        coordsSurfE
        utm
        latitude
        longitude
        footageNS
        dirNS
        footageEW
        dirEW
        qtrQtr
        section
        township
        townshipDir
        range
        rangeDir
        meridian
        county
        dirHoriz
        dirVert
        dirDirect
        confidential
        confRelDate
        leaseNumber
        leaseType
        surfaceOwner
        abandonDate
        wellStatus
        totCumOil
        totCumGas
        totCumWater
        indianTribe
        multiLats
        origianlField
        unitName
        gisstatusType
        origComplDate
        jurisdiction
        tdsnavajo
        tdswingate
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
        wellName
        operator
        operatorNo
        fieldName
        groundElev
        kellyElev
        drkFloorElev
        coordsSurfN
        coordsSurfE
        utm
        latitude
        longitude
        footageNS
        dirNS
        footageEW
        dirEW
        qtrQtr
        section
        township
        townshipDir
        range
        rangeDir
        meridian
        county
        dirHoriz
        dirVert
        dirDirect
        confidential
        confRelDate
        leaseNumber
        leaseType
        surfaceOwner
        abandonDate
        wellStatus
        totCumOil
        totCumGas
        totCumWater
        indianTribe
        multiLats
        origianlField
        unitName
        gisstatusType
        origComplDate
        jurisdiction
        tdsnavajo
        tdswingate
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
