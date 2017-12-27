# Create a function that takes a list as a parameter,
# and returns a new list with every second element from the original list.
# It should raise an error if the parameter is not a list.
# Example: with the input [1, 2, 3, 4, 5] it should return [2, 4].

my_list = [1, 2, 3, 4, 5]
new_list = []

def list_maker(list_name):
    if type(list_name) != list:
        raise TypeError("Hey, this parameter is not a list!")
    else:
        for i in list_name[1::2]:
            new_list.append(i)
        return new_list

print(list_maker(my_list))
