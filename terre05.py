import sys

chiffre = int(sys.argv[1])
chiffre_2 = int(sys.argv[2])

if chiffre_2 > chiffre:
    print("error .")
elif chiffre_2 == 0:
    print("error .")
elif chiffre_2 != 0:
    resultat = chiffre // chiffre_2
    reste = chiffre % chiffre_2
    print(f"résultat : {resultat}")
    print(f"reste : {reste}")



