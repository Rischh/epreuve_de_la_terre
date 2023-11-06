import sys 

chiffre = sys.argv[1]
if chiffre.lstrip('-').isdigit():
    chiffre = int(chiffre)
    if chiffre % 2 == 0:
        print("Pair")
    else:
        print("Impair")
else:
    print("Tu ne me la mettra pas à l'envers")