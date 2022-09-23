//Set search fields for pop features according to different layers

const searchFields = new Map<string, string[]>();
searchFields.set("wells", [ "API", "WellName", "County", "WellType"]);

searchFields.set("CO2", [
  "Ghgrp_id",
  "Source_name",
  "City",
  "CO2_tonne",
]);

searchFields.set("saline", ["Featid","Resource_name","Partnership","Basin_name"]);

searchFields.set("salineGrid", ["Featid","Resource_name","Partnership","Basin_name"]);

searchFields.set("basin",["Featid","Basin_name","Partnershi","Area"]);

export default searchFields;