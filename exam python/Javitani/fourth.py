# Create a Rocket class.
# It should take 3 parameters in its constructor
# 1st parameter: the type of the rocket as a string, "falcon1" or "falcon9".
# 2nd parameter: the starting fuel level as a number, defaults to 0.
# 3rd parameter: number of launches as a number, defaults to 0.

class Rocket():

    def __init__(self, type_of_rocket, start_fuel_level = None , number_of_launches = None):
        self.type_of_rocket = type_of_rocket
        if start_fuel_level is None:
            self.start_fuel_level = 0
        else:
             self.start_fuel_level = start_fuel_level
        if number_of_launches is None:
            self.number_of_launches = 0
        else:
            self.number_of_launches = number_of_launches
        self.used_fuel = 0

# It should have 3 methods:
#
# launch()
# it should use 1 fuel if it's a falcon1 and 9 fuels if it's a falcon9.
# it should increment the launches by one if it had enough fuel for the launch.

    def launch(self):
        if self.type_of_rocket == "falcon1":
            self.start_fuel_level -= 1
            if self.start_fuel_level >= 1:
                self.number_of_launches += 1
        elif self.type_of_rocket == "falcon9":
            self.start_fuel_level -= 9
            if self.start_fuel_level >= 9:
                self.number_of_launches += 1


# refill()
# it should refill the rocket's fuel level to 5 if falcon1 and to 20 if falcon9.
# it should return the amount of fuel used for the refill.
# example: if the rocket is a falcon1 and has fuel level 3, then it should return 2.
#
    def refill(self):
        if self.type_of_rocket == "falcon1":
            self.used_fuel = (5 - self.start_fuel_level)
            return self.used_fuel
            self.start_fuel_level = 5
        if self.type_of_rocket == "falcon9":
            self.used_fuel = (5 - self.start_fuel_level)
            return self.used_fuel
            self.start_fuel_level = 20

# getStats()
# it should return its stats as a string like: "name: falcon9, fuel: 11, launches: 1"

    def getStats(self):
        return ("name: ", self.type_of_rocket, "fuel: ", self.used_fuel, "launches: ", self.number_of_launches)

################################################

# The following code should work with the class:

falcon1 = Rocket('falcon1')
returned_falcon9 = Rocket('falcon9', 11, 1)

falcon1.refill() # 5
falcon1.launch()

print(falcon1.getStats()) # name: falcon1, fuel: 4, launches: 1
print(returned_falcon9.getStats()) # name: falcon9, fuel: 11, launches: 1
