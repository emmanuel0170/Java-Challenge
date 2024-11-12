/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

function AnswerCard(
  challengeResults: {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    answer: string;
  }[]
) {
  return (
    <Tabs defaultValue="challenge1" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        {challengeResults.map((result) => {
          return (
            <TabsTrigger key={result.id} value={result.id}>
              {result.title}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {challengeResults?.map((result) => {
        return (
          <TabsContent value={result.id} key={result.id}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{result.title}</CardTitle>
                <CardDescription>{result.description}.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="language-java">{result.answer}</code>
                </pre>
                <div className="mt-4">
                  <Badge>{result.difficulty}</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        );
      })}

      <TabsContent value="challenge2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Personal Information</CardTitle>
            <CardDescription>
              Write a program that prints out your name, age, favorite color,
              and a fun fact about yourself.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="language-java">{`
public class PersonalInfo {
    public static void main(String[] args) {
        String name = "Jane Smith";
        int age = 30;
        String favoriteColor = "Blue";
        String funFact = "I can solve a Rubik's cube in under 2 minutes!";
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Favorite Color: " + favoriteColor);
        System.out.println("Fun Fact: " + funFact);
    }
}
              `}</code>
            </pre>
            <div className="mt-4">
              <Badge>Easy</Badge>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="challenge3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">ASCII Art</CardTitle>
            <CardDescription>
              Create a program that prints out a simple ASCII art design using
              multiple print statements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="language-java">{`
public class ASCIIArt {
    public static void main(String[] args) {
        System.out.println("    /\\");
        System.out.println("   /  \\");
        System.out.println("  /    \\");
        System.out.println(" /______\\");
        System.out.println("   |  |");
        System.out.println("   |  |");
        System.out.println("   |__|");
    }
}
              `}</code>
            </pre>
            <div className="mt-4">
              <Badge>Medium</Badge>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default AnswerCard;
