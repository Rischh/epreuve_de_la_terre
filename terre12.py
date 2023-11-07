import sys
from datetime import datetime

def convertir_en_24h(heure_12h):
    try:
        heure_24h = datetime.strptime(heure_12h, "%I:%M %p").strftime("%H:%M")
        return heure_24h
    except ValueError:
        return "Format incorrect. Utilisez HH:MM AM/PM."

if len(sys.argv) != 3:
    print("erreur.")
else:
    heure_12h = " ".join(sys.argv[1:3])
    heure_24h = convertir_en_24h(heure_12h)
    print(heure_24h)