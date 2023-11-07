import sys

if len(sys.argv) != 2:
    print("erreur.")
else:
    entier_positif = sys.argv[1]

    if entier_positif.isdigit():
        entier_positif = int(entier_positif)

        racine_carree = int(entier_positif ** 0.5)

        if racine_carree * racine_carree == entier_positif:
            print(racine_carree)
        else:
            print("erreur.")
    else:
        print("erreur.")