import sys

def convertir_en_12h(heure_24h):
    heures, minutes = map(int, heure_24h.split(":"))

    if heures < 12:
        meridiem = "AM"
        if heures == 0:
            heures = 12 
    else:
        meridiem = "PM"
        if heures > 12:
            heures -= 12
            
    heure_12h = f"{heures:02d}:{minutes:02d} {meridiem}"
    return heure_12h
        
heure_24h = sys.argv[1]

heure_12h = convertir_en_12h(heure_24h)
print(heure_12h)
