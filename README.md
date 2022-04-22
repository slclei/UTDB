# UTDB
UTDB (version 1.0, Apirl 2022) is a database system designed for CCS project in [Energy & Geoscience Institute (EGI)](https://www.egi.utah.edu/), University of Utah. This is a GIS based map system, as the data feature will be shown based on the geographical location location in a base map.

# Design
[Design documents](https://github.com/slclei/UTDB/tree/main/UtDataBase/documents/design) are used to design database system before implementation.

# Backend server
[Backend server](https://github.com/slclei/UTDB/tree/main/UtDataBase/UtahWells) is implemented by Java Spring Boot (version 1.0, Apirl 2022).

# Frontend interface
[Frontend interface](https://github.com/slclei/UTDB/tree/main/UtDataBase/UtahWellsDB/utah_wells_db) is implemented by Typescript React (version 1.0, Apirl 2022).

[Data explorer](https://dataexplorer.ogm.utah.gov/) from Utah Department of Natural Resources Division of Oil, Gas and Mining (UDOGM) and [NatCarb](https://edx.netl.doe.gov/geocube/#natcarbviewer) from NETL, DOE are used as reference for user interface.

# Database
Database is implemented in PostgreSQL 11 (version 1.0, Apirl 2022).

# Map service
[Map service](https://www.mapbox.com/) is implemented by Mapbox (version 1.0, Apirl 2022).

# Data source
Following databases are referenced for data source.

[Data explorer](https://dataexplorer.ogm.utah.gov/) from UDOGM

[NatCarb](https://edx.netl.doe.gov/geocube/#natcarbviewer) from NETL (DOE)

[Utah Geospatial Resource Center (UGRC)](https://gis.utah.gov/data/) from (UGRC)

[Geologic CO2 Sequestration](https://co2public.er.usgs.gov/viewer/) from (USGS)

[Science Data Catalog (SDC)](https://data.usgs.gov/datacatalog/) from USGS

[Utah SGID](https://opendata.gis.utah.gov/search?collection=Dataset) from Utah GIS


### Update
Version 1.0, 04/22/2022
