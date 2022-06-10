/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWells = /* GraphQL */ `
  mutation CreateWells(
    $input: CreateWellsInput!
    $condition: ModelWellsConditionInput
  ) {
    createWells(input: $input, condition: $condition) {
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
export const updateWells = /* GraphQL */ `
  mutation UpdateWells(
    $input: UpdateWellsInput!
    $condition: ModelWellsConditionInput
  ) {
    updateWells(input: $input, condition: $condition) {
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
export const deleteWells = /* GraphQL */ `
  mutation DeleteWells(
    $input: DeleteWellsInput!
    $condition: ModelWellsConditionInput
  ) {
    deleteWells(input: $input, condition: $condition) {
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
