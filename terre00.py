# Premier code:

# alphabet = "abcdefghijklmnopqrstuvwxyz"

# for i in alphabet:
#     print(alphabet)
#     break

# Clean code immuable:

def display_alphabet(alpha):
    for i in alphabet:
        print(i, end='')
    
alphabet = "abcdefghijklmnopqrstuvwxyz"
    
display_alphabet(alphabet)
