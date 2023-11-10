# import sys

# for arg in sys.argv[1:]:
#     print(arg)
    
import sys


def display_arguments(user_arg):
    for arg in user_arg:           # Fonction
        print(arg)
    
user_arguments = sys.argv[1:]      # Parsing    

        
display_arguments(user_arguments)  # Affichage 
