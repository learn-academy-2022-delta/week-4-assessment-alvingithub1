# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# Psuedocode: 
# Create a method called evenOrOdd and take in a parameter called num
# Use an if statement on num and use the built-in method .even? to check if it is an even. If it is, then it will return the value is even
# Otherwise, use an else statement, because the num is odd and it will return the value is odd

def evenOrOdd num
    if num.even?
        "#{num} is even"
    else
        "#{num} is odd"
    end
end

p evenOrOdd num1 # Output: "7 is odd"
p evenOrOdd num2 # Output: "42 is even"
p evenOrOdd num3 # Output: "221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Psuedocode:
# Create a method called removeVowels that takes a parameter called string
# We will create a new variable called output and set it to equal string.delete method and put "aeiouAEIOU" for all the vowels lowercase and uppercase

def removeVowels string
    output = string.delete "aeiouAEIOU"
end

p removeVowels album1 # Output: "Rbbr Sl"
p removeVowels album2 # Output: "Sgt Pppr"
p removeVowels album3 # Output: "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Psuedocode:
# Create a new method called palindromeCheck and takes a parameter called string
# Use an if condtion on the string, add a .downcase built-in method, and check if it is not equal to string, add .downcase, and .reverse
# If it isn't equal to each other, then we return string is not a palindrome
# Use an else statement and return string is a palindrome

def palindromeCheck string
    if string.downcase != string.downcase.reverse
        return "#{string} is not a palindrome"
    else
        return "#{string} is a palindrome"
    end
end

p palindromeCheck palindrome_tester1
p palindromeCheck palindrome_tester2
p palindromeCheck palindrome_tester3