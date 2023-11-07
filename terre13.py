import sys

num1 = (sys.argv[1])
num2 = (sys.argv[2])
num3 = (sys.argv[3])

if num1.isdigit() and num2.isdigit() and num3.isdigit():

    if num1 <= num2 <= num3 or num3 <= num2 <= num1:
        middle_number = num2
    elif num2 <= num1 <= num3 or num3 <= num1 <= num2:
        middle_number = num1
    else:
        middle_number = num3

    print(middle_number)
else:
    print("erreur.")

