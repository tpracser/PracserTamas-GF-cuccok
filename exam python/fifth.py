# Create a SpaceX class.
# it should take 1 parameter in its constructor: the stored fuel
#

class SpaceX():

    def __init__(self, stored_fuel):
        # self.rocket = Rocket()
        self.stored_fuel = stored_fuel
        self.rockets = []
        # self.number_of_launches = 0


# it should have 4 methods:
#
# addRocket(rocket)
# it should add a new rocket to SpaceX that is given in its first parameter
# use the rockets from the fourth exercise.

    def addRocket(self, rocket):
        self.rockets.append(rocket)

# refill_all()
# it should refill all of its rockets with fuel and substract the needed fuel from the storage

    def refill_all(self):
        for i in self.rockets:
            self.stored_fuel -= i.self.rocket.refill()

# launch_all()
# it should launch all the rockets

    def launch_all(self):
        for i in self.rockets:
            i.self.number_of_launches

# buy_fuel(amount)
# it should increase stored fuel by amount

    def buy_fuel(self, amount):
        self.stored_fuel += amount

# getStats()
# it should return its stats as a sting like: "rockets: 3, fuel: 100, launches: 1"

    def getStats(self):
        return ("rockets: ", len(self.rockets), "fuel: ", self.stored_fuel,
                    "launches: ", self.number_of_launches)

################################################

# The following code should work with the class:

from fourth import Rocket

# class implementation goes here

space_x = SpaceX(100)
falcon1 = Rocket('falcon1', 0, 0)
falcon9 = Rocket('falcon9', 0, 0)
returned_falcon9 = Rocket('falcon9', 11, 1)

print(returned_falcon9.getStats()) # name: falcon9, fuel: 11

space_x.addRocket(falcon1)
space_x.addRocket(falcon9)
space_x.addRocket(returned_falcon9)

print(space_x.getStats()) # rockets: 3, fuel: 100, launches: 1
space_x.refill_all()
print(space_x.getStats()) # rockets: 3, fuel: 66, launches: 1
space_x.launch_all()
print(space_x.getStats()) # rockets: 3, fuel: 66, launches: 4
space_x.buy_fuel(50)
print(space_x.getStats()) # rockets: 3, fuel: 116, launches: 4
