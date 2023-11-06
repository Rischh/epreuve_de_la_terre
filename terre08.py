import sys

if len(sys.argv) != 3:
    print("erreur .")
else:
    chiffre = sys.argv[1]
    chiffre_2 = sys.argv[2]

    
    if chiffre.isdigit() and chiffre_2.isdigit():
        chiffre = int(chiffre)
        chiffre_2 = int(chiffre_2)

        if chiffre_2 == 0:
            print("erreur.")
        else:
            resultat = chiffre ** chiffre_2
            print(resultat)
    else:
        print("erreur.")
