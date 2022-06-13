import csv
import json
from pathlib import Path
import os

# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
     
    # create a dictionary
    data = {}
     
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
         
        # Convert each row into a dictionary
        # and add it to data
        '''
        header=[]
        cout=0
        for rows in csvReader:
            # for header
            if cout==0:
                header=rows[:]
                cout+=1
            # for data
            else:
                for i in range(len(rows)):
                    key=header[i]
                    value=rows[i]

                pass
            '''
        for rows in csvReader:
            # Assuming a column named 'No' to
            # be the primary key
            key = rows['api']
            data[key] = rows
 
    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
         
# Driver Code
# Decide the two file paths according to your
# computer system

csvFilePath = '/Users/leixu/Documents/GitHub/UTDB/UtDataBase/UtahWellsDB/utah_wells_db/src/data/wellsUTHeader.csv'
jsonFilePath = '/Users/leixu/Documents/GitHub/UTDB/UtDataBase/UtahWellsDB/utah_wells_db/src/data/target.json'
 
# Call the make_json function
make_json(csvFilePath, jsonFilePath)