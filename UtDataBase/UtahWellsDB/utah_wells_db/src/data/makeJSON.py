import csv
import json
from pathlib import Path
import os

# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
     
    # create a dictionary
    data = []

    # field that is number
    number=["objectid_1","objectid","api","operatorno","utmzone","footagens","footageew","section","multi_lats"]
    fnumber=["latitude","longitude"]
    number2=[0,1,2,5,12,13,14,15,17,20,42] 
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
         
        # Convert each row into a dictionary
        # and add it to data
        for rows in csvReader:
            # Assuming a column named 'No' to
            # be the primary key
            for k in rows:
                if k in number:
                    rows[k]=int(rows[k])
                elif k in fnumber:
                    rows[k]=float(rows[k])

            key = rows['api']
            data.append(rows)
 
    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
         
# Driver Code
# Decide the two file paths according to your
# computer system

csvFilePath = '/Users/leixu/Documents/GitHub/UTDB/UtDataBase/UtahWellsDB/utah_wells_db/src/data/test.csv'
jsonFilePath = '/Users/leixu/Documents/GitHub/UTDB/UtDataBase/UtahWellsDB/utah_wells_db/src/data/test1.json'
 
# Call the make_json function
make_json(csvFilePath, jsonFilePath)