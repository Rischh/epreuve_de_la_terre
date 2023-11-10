# import sys

# alphabet = "abcdefghijklmnopqrstuvwxyz"

# lettre_alphabet = sys.argv[1]

# for lettre in alphabet[alphabet.index(lettre_alphabet):]:
#     print(lettre)

import sys 

def alphabet_from(alpha):
    for letter in alpha[alpha.index(lettre):]: # Fonction
        print(letter)

lettre = sys.argv[1]
alphabet = "abcdefghijklmnopqrstuvwxyz"        # Parsing  

alphabet_from(alphabet)                        # Affichage 

    



    