import unittest
import third

class Calculator(unittest.TestCase):

    def setUp(self):
        self.variable = 2
        self.string = "strings"

    def test_if_tpye_is_not_string(self):
        self.assertEqual(third.count_letter_in_string(self.variable, []), 0)

    def test_if_tpye_is_not_letter(self):
        self.assertEqual(third.count_letter_in_string(self.string, 2), 0)

if __name__ == '__main__':
    unittest.main()
