import os
import json
 
mypath = os.path.dirname(os.path.abspath(__file__))+"/portfolio"

onlyfiles = [i for i in os.listdir(mypath) if os.path.isfile(os.path.join(mypath, i))]

with open("imgList.txt","w") as file :
    for item in onlyfiles :
        file.write(item +"\n")