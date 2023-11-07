import sys

def liste_est_triee(liste):
    for i in range(len(liste) - 1):
        if liste[i] > liste[i + 1]:
            return False
    return True

ma_liste = sys.argv[1:]

try:
    ma_liste = [int(x) for x in ma_liste]      
    if liste_est_triee(ma_liste):
        print("La liste est triée.")
    else:
        print("La liste n'est pas triée.")
except ValueError:
    print("erreur.")