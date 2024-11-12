"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, BookOpen, Calendar } from "lucide-react";

const challenges = [
  {
    day: 1,
    title: "Java Basics",
    challenges: [
      {
        title: "Hello, World!",
        description:
          "Create a program that prints your name and age on separate lines.",
        difficulty: "Easy",
      },
      {
        title: "Personal Information",
        description:
          "Write a program that prints out your name, age, favorite color, and a fun fact about yourself.",
        difficulty: "Easy",
      },
      {
        title: "ASCII Art",
        description:
          "Create a program that prints out a simple ASCII art design using multiple print statements.",
        difficulty: "Medium",
      },
    ],
  },
  {
    day: 2,
    title: "Variables and Data Types",
    challenges: [
      {
        title: "Rectangle Area Calculator",
        description:
          "Write a program that calculates the area of a rectangle using variables for length and width.",
        difficulty: "Easy",
      },
      {
        title: "Temperature Converter",
        description:
          "Create a program that converts temperatures from Celsius to Fahrenheit and vice versa.",
        difficulty: "Medium",
      },
      {
        title: "BMI Calculator",
        description:
          "Develop a program that calculates Body Mass Index (BMI) using weight in kilograms and height in meters.",
        difficulty: "Medium",
      },
    ],
  },
  {
    day: 3,
    title: "Operators and Expressions",
    challenges: [
      {
        title: "Leap Year Checker",
        description:
          "Create a program that determines if a given year is a leap year.",
        difficulty: "Medium",
      },
      {
        title: "Even or Odd",
        description:
          "Write a program that determines if a number is even or odd using the modulus operator.",
        difficulty: "Easy",
      },
      {
        title: "Quadratic Equation Solver",
        description:
          "Develop a program that solves a quadratic equation given the coefficients a, b, and c.",
        difficulty: "Hard",
      },
    ],
  },
  {
    day: 4,
    title: "Control Flow - If Statements",
    challenges: [
      {
        title: "Grade Calculator",
        description:
          "Write a program that determines the grade (A, B, C, D, or F) based on a numerical score input.",
        difficulty: "Medium",
      },
      {
        title: "Traffic Light Simulator",
        description:
          "Create a program that simulates a traffic light, changing colors based on user input.",
        difficulty: "Medium",
      },
      {
        title: "Tax Calculator",
        description:
          "Develop a program that calculates income tax based on different income brackets and rates.",
        difficulty: "Hard",
      },
    ],
  },
  {
    day: 5,
    title: "Control Flow - Loops",
    challenges: [
      {
        title: "Fibonacci Sequence",
        description:
          "Create a program that prints the first 10 numbers in the Fibonacci sequence.",
        difficulty: "Medium",
      },
      {
        title: "Multiplication Table",
        description:
          "Write a program that prints out the multiplication table for a given number (1 to 10).",
        difficulty: "Easy",
      },
      {
        title: "Prime Number Checker",
        description:
          "Develop a program that checks if a given number is prime using a loop.",
        difficulty: "Hard",
      },
    ],
  },
  {
    day: 6,
    title: "Arrays and ArrayLists",
    challenges: [
      {
        title: "Array Min/Max Finder",
        description:
          "Write a program that finds the largest and smallest numbers in an array of integers.",
        difficulty: "Medium",
      },
      {
        title: "Array Reversal",
        description:
          "Create a program that reverses the order of elements in an array without using built-in reverse methods.",
        difficulty: "Medium",
      },
      {
        title: "Shopping List Manager",
        description:
          "Develop a program that manages a shopping list using an ArrayList, allowing users to add, remove, and display items.",
        difficulty: "Hard",
      },
    ],
  },
  {
    day: 7,
    title: "Methods",
    challenges: [
      {
        title: "Simple Calculator",
        description:
          "Create a calculator program with methods for addition, subtraction, multiplication, and division.",
        difficulty: "Medium",
      },
      {
        title: "Palindrome Checker",
        description:
          "Write a method that checks if a given string is a palindrome.",
        difficulty: "Medium",
      },
      {
        title: "Recursive Factorial",
        description:
          "Implement a recursive method to calculate the factorial of a number.",
        difficulty: "Hard",
      },
    ],
  },
  {
    day: 8,
    title: "Introduction to OOP",
    challenges: [
      {
        title: "Car Class",
        description:
          'Design a "Car" class with attributes (make, model, year) and methods (start, stop, accelerate).',
        difficulty: "Medium",
      },
      {
        title: "Student Management System",
        description:
          'Create a "Student" class and a program to manage student records (add, display, search).',
        difficulty: "Hard",
      },
      {
        title: "Simple Game Character",
        description:
          'Develop a "Character" class for a game with attributes (name, health, strength) and methods (attack, defend).',
        difficulty: "Medium",
      },
    ],
  },
  {
    day: 9,
    title: "Encapsulation and Access Modifiers",
    challenges: [
      {
        title: "Bank Account",
        description:
          'Create a "BankAccount" class with private balance and public methods for deposit and withdrawal.',
        difficulty: "Medium",
      },
      {
        title: "Employee Management",
        description:
          'Design an "Employee" class with private attributes and public getter/setter methods.',
        difficulty: "Medium",
      },
      {
        title: "Secure Password Manager",
        description:
          'Develop a "PasswordManager" class that securely stores and retrieves passwords using encapsulation.',
        difficulty: "Hard",
      },
    ],
  },
  {
    day: 10,
    title: "Inheritance",
    challenges: [
      {
        title: "Shape Hierarchy",
        description:
          'Design a hierarchy of shapes (Circle, Rectangle, Triangle) that inherit from a base "Shape" class.',
        difficulty: "Hard",
      },
      {
        title: "Animal Kingdom",
        description:
          'Create a hierarchy of animal classes with a base "Animal" class and derived classes like "Mammal", "Bird", etc.',
        difficulty: "Medium",
      },
      {
        title: "Vehicle Inheritance",
        description:
          'Implement a vehicle class hierarchy with a base "Vehicle" class and derived classes for different types of vehicles.',
        difficulty: "Hard",
      },
    ],
  },
  {
    day: 11,
    title: "Polymorphism",
    challenges: [
      {
        title: "Shape Areas",
        description:
          'Extend the shapes hierarchy from Day 10 by adding an "area()" method to each shape class.',
        difficulty: "Hard",
      },
      {
        title: "Animal Sounds",
        description:
          'Add a "makeSound()" method to the animal hierarchy from Day 10 and implement it differently for each animal.',
        difficulty: "Medium",
      },
      {
        title: "Employee Payroll System",
        description:
          "Create an employee hierarchy with different types of employees and calculate their pay using polymorphism.",
        difficulty: "Hard",
      },
    ],
  },
  {
    day: 12,
    title: "Interfaces and Abstract Classes",
    challenges: [
      {
        title: "Musical Instruments",
        description:
          'Create an interface "Playable" and implement it in classes representing different musical instruments.',
        difficulty: "Hard",
      },
      {
        title: "Shape Abstract Class",
        description:
          'Refactor the shape hierarchy to use an abstract "Shape" class with an abstract "area()" method.',
        difficulty: "Medium",
      },
      {
        title: "Payment System",
        description:
          'Design a payment system with an interface "Payable" and implement it for different payment methods.',
        difficulty: "Hard",
      },
    ],
  },
  {
    day: 13,
    title: "Exception Handling",
    challenges: [
      {
        title: "File Reader with Exception Handling",
        description:
          "Write a program that reads a file and handles potential exceptions (FileNotFoundException, IOException).",
        difficulty: "Hard",
      },
      {
        title: "Custom Exception",
        description:
          "Create a custom exception class and use it in a program (e.g., for validating user input).",
        difficulty: "Medium",
      },
      {
        title: "Robust Calculator",
        description:
          "Enhance the calculator from Day 7 to handle exceptions like division by zero and invalid input.",
        difficulty: "Hard",
      },
    ],
  },
  {
    day: 14,
    title: "Final Project",
    challenges: [
      {
        title: "Library Management System",
        description:
          "Develop a basic library management system with features to add/remove books, search for books, check out and return books, and display available and borrowed books.",
        difficulty: "Very Hard",
      },
      {
        title: "Simple Text-Based Game",
        description:
          "Create a text-based adventure game that incorporates OOP concepts, user input, and basic game logic.",
        difficulty: "Very Hard",
      },
      {
        title: "Student Grade Tracker",
        description:
          "Build a comprehensive student grade tracking system with features for managing students, courses, and grades.",
        difficulty: "Very Hard",
      },
    ],
  },
];
export default function Component() {
  const [expandedDays, setExpandedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Java Crash Course
          </CardTitle>
          <CardDescription className="text-lg text-white/90">
            Master Java Programming in Two Weeks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-2">
              <Code className="w-6 h-6" />
              <span>14 Days of Intensive Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              <span>42 Hands-on Coding Challenges</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              <span>2-3 Hours Daily Commitment</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm">
            From basic syntax to object-oriented programming, this course covers
            essential Java concepts with practical, hands-on challenges.
          </p>
        </CardFooter>
      </Card>

      <h2 className="text-3xl font-bold mb-6 text-center">Daily Challenges</h2>
      <Accordion type="multiple" value={expandedDays} className="w-full">
        {challenges.map((dayChallenge) => (
          <AccordionItem
            key={dayChallenge.day}
            value={`day-${dayChallenge.day}`}
          >
            <AccordionTrigger
              onClick={() => toggleDay(`day-${dayChallenge.day}`)}
            >
              <span className="text-xl font-semibold">
                Day {dayChallenge.day}: {dayChallenge.title}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dayChallenge.challenges.map((challenge, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">
                          {challenge.title}
                        </CardTitle>
                        <Badge
                          variant={
                            challenge.difficulty === "Easy"
                              ? "secondary"
                              : challenge.difficulty === "Medium"
                              ? "default"
                              : challenge.difficulty === "Hard"
                              ? "destructive"
                              : "outline"
                          }
                        >
                          {challenge.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p>{challenge.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Badge variant="secondary">
                        Bsc. AI & ML (Java Challenge)
                      </Badge>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
