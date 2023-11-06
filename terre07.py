import sys

if len(sys.argv) != 2:
    print("erreur.")
else:
    txt = sys.argv[1]

    if txt.isdigit():
        print("erreur.")
    else:
        print(len(txt))