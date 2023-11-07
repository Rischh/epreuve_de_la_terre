import sys

def est_nombre_premier(nombre):
    if nombre <= 1:
        return False
    if nombre <= 3:
        return True

    if nombre % 2 == 0 or nombre % 3 == 0:
        return False

    i = 5
    while i * i <= nombre:
        if nombre % i == 0 or nombre % (i + 2) == 0:
            return False
        i += 6

    return True

if len(sys.argv) != 2:
    print("erreur.")
else:
    nombre = sys.argv[1]

    if nombre.isdigit():
        nombre = int(sys.argv[1])

        if est_nombre_premier(nombre):
            print(f"{nombre} est un nombre premier.")
        else:
            print(f"{nombre} n'est pas un nombre premier.")

    else:
        print("erreur.")


    