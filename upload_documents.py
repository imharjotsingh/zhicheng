#  Purpose: Connect to MongoDB, read from excel file, and upload the excel document's "ALL DATA" sheet as documents in MONGODB
#  Author: Ellis Brown, 6/12/2020
#  Creates a file called "datafile_out.json" which represents all of the data as a .json file. Creates an error log, displaying all changes.
        # Still uploads to MongoDB
#Note: takes about 20 seconds.


import tkinter as tk
from tkinter import filedialog, messagebox
import pymongo
from pymongo import MongoClient
import xlrd
import json
import sys
import base64
import time

#  TODO: 
#  Change connection_string, so password is not part of string
#  Modify "sheet_by_index" so it gets the sheet name, rather than the index, just in case someone changes this.
#  Change what the parser changes within the text, so the unicode is no longer a problem (\2019) for example


def main():
    root = tk.Tk()
    root.withdraw()
    writeData = messagebox.askyesno("Parse Excel Python Program","Would you like to save the data to MongoDB\n(If you are just testing, choose no)")
    if (writeData):
        print("\nConnecting to MongoDB...")
        #Initilize connection to mongodb
        connection_string = "mongodb://krose02:" + intermediate() + "@cluster0-shard-00-00-sawkn.mongodb.net:27017,cluster0-shard-00-01-sawkn.mongodb.net:27017,cluster0-shard-00-02-sawkn.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
        #We should modify the connection string, so it does not include the password.
        client = pymongo.MongoClient(connection_string)
        mydb = client["mcg-database"] #name of database. If dosn't exist, will create one
        mydb['standards'].drop()
        mycol = mydb["standards"] #name of collection 

    ######################################### GET FILE PATH ###############################
   
    if not messagebox.askokcancel("Parse Excel Python Program","Please choose the Excel file you would like to open"):
        exit()
    
    file_path = filedialog.askopenfilename()

    ######################################### OPEN UP EXCEL SHEET  ###################

    wb = xlrd.open_workbook(file_path)
    sheet = wb.sheet_by_name("ALL DATA")

    dict_var = {}
    headers = []
    jsonFile = open(".\\mcg\\logs\\datafile_out.json", "w")
    jsonFile.write("[")
    print("Writing to file", flush=True)
    if writeData:
        print("and uploading to mongodb...", flush=True)
    sys.stdout.flush()
    current_time = time.strftime("%Y%m%d-%H%M%S")
    file_name = ".\\mcg\\logs\\log_upload_standards." +str(current_time) + ".txt"
    error_log = open(str(file_name), "a")
    mistakes = False
    ######################################## READ THROUGH DATA, CREATE DICTIONARY ########################
    for i in range (sheet.ncols):
        headers.append(sheet.cell_value(0, i))
        #Get the column headers for the data shet
    for row_index in range(1, sheet.nrows):
        for col_index in range(sheet.ncols):
            cell_text = str(sheet.cell_value(row_index, col_index))
            # Read in the data file, so we can populate the database
            cell_text = cleanData(cell_text)
            dict_var[headers[col_index]] = cell_text
    ######################################### WRITE LINES TO .JSON FILE, AND UPLOAD TO MONGODB ##################################
        # dict_var = checkVocabStandardID(dict_var) The client needs to fix this problem, not our problem.
        check = dataCorrect(dict_var, headers, row_index, error_log)
        if check[1]:
           mistakes = True
        if check[0]:
            jsonFile.write(json.dumps(dict_var, indent=4))
            if row_index < sheet.nrows -1 :
                jsonFile.write(",\n")
            #Add to MongoDB server
            if writeData:
                mycol.insert_one(dict_var)   
        else:
            error_log.write(f"Line {row_index + 1 } upload successful\n")
        dict_var = {}  # reset for next line.
    jsonFile.write("]")
    if mistakes:
        print("\nPlease fix and run script again.\n")
        print("All errors have been saved to a file called \"log_upload_standards" + str(current_time) + "\" in logs.")
        print("The standards have been saved in .json format under the logs as well.")
        error_log.write("All files have been uploaded. Please fix and run script again")
    else:
        error_log.write("Upload Successful\n")
    print("Finished!")





#Removes newline characters from text, as the excel file has many unnececary new-line characters
def cleanData(text):
    text = text.replace("\n", "")
    return text




#  Purpose: Make sure all searchable data fields are filled.
#  This Excel row MUST HAVE the following:
    # Concept Area
    # Subject Area
    # Big Ideas
    # Concept
    # Standard ID


def dataCorrect(row, headers, row_index, error_log):
    empty = len(headers)
    count = 2
    error = False
    for i in range(len(headers)):
        if headers[i] != "Vocab" and headers[i] != "Essential Questions":
            if row[headers[i]] == "":
                if not error:
                    print(f"ERROR: (Row {row_index + 1 }) with inserting data: No content in essential cell |||{headers[i]}|||")
                error_log.write(
                    f"ERROR In table \"ALLDATA\": (Row {row_index + 1 }) with inserting data: No content in essential cell |||{headers[i]}|||\n")
                error = True
                count+=1        
    if count == empty:
        return [False, error]
    return [True, error]
    
def intermediate():
   return base64.b64decode('bWNn').decode("utf-8") 

main()
