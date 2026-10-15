# 2052 Programming: Best Practices & Style Guide

#### Last updated Oct 15, 2026

Please note that while many of these conventions are widely held outside of the KnightKrawler programming subteam, there will be conventions that differ from other FRC team’s guides as well as industry setting guidelines. While we do aim to be consistent with the ladder for ease of transitioning out of FRC, many of the limitations and unique qualities of the WPILib suite makes this impossible.

## Naming Conventions

Following Java standards, we use UpperCamelCase for all of our class and file names with lowerCamelCase being used for all non-constant variable names. We do not use any form of hungarian notation or any prefixes such as scope, underscore, or interfaces (e.g. m\_name, IClass, \_var). However, for constants, enum values, and singleton instances, we use SCREAMING\_SNAKE\_CASE.

All classes that are subclasses of Subsystem, Mechanism, or Command should end with their respective superclasses in their name (e.g. IntakeSubsystem, ShootCommand, PivotMechanism). However, when naming variables of Subsystems or Mechanisms, the superclass name should be dropped. Additionally, for any case in which units are being held outside of a special class (see the Units section), their variable names should include their corresponding units.

Abbreviations should be avoided when considering naming classes, variables and methods. When they are necessary to use, their unabbreviated names should be written either as a comment or as part of a javadoc near their initial declaration.

## Formatting

We recommend using an auto-formatter that reformats every file to the specified standard. This standard is generally as follows:

- Tab indentation equals 4 spaces  
- One statement per line (no int x \= 0; int y \= 0;).  
- Curly brackets start on the same line as the declared statement and end on their own independent lines.  
- Put spaces between the outside of parentheses in if, for, and while statements.  
- Embedded statements should increment the indentations

Here is an example of these put together:

```
public class IntakeSubsystem extends Subsystem {
    private static IntakeSubsystem INSTANCE;

    @Getter @Setter private Angle goalAngle;

    public static getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new IntakeSubsystem();
        }
        return INSTANCE;
    }

    private IntakeSubsystem() {
        goalAngle = Degrees.of(0);
    }
}
```

Additionally, as seen above, any singleton should have its getInstance() placed above its constructor and below the variable declarations. Within the variable declarations, the INSTANCE variable should be placed above the rest within a separate block. Similar things should be grouped together within a class such as method overloads, getters and setters (to be avoided, see Lombok section), similar method types (overrides, computations, etc.), default methods, and so on. 

For auto formatting, we use [spotless](https://plugins.gradle.org/plugin/com.diffplug.gradle.spotless). This is our current configuration:

Plugin:  
`id "com.diffplug.spotless" version "6.21.0"`

In gradle.build:  
```
project.compileJava.dependsOn(spotlessApply)
spotless {
    java {
        target fileTree(".") {
            include "**/*.java"
            exclude "**/build/**", "**/build-*/**"
        }
        toggleOffOn()
        googleJavaFormat()
        trimTrailingWhitespace()
        endWithNewline()
        formatAnnotations()
    }  
}
```

(Look up updated versions, the ones posed here might not be up to date depending on when this is being read)

## Class Structure

In general, the structure of a class should be as follows:

1. Class header  
2. Instance variable (if singleton)  
3. Grouped class level variables  
4. GetInstance() method (if singleton)  
5. Constructor(s)  
   1. Overloaded Constructors should be listed in descending order of number of inputs  
6. Methods (Grouped by type)  
   1. Within overloaded method groups, methods should be listed in descending order of number of inputs  
7. Periodic Method(s) (if applicable)  
8. Embedded enums (if applicable)  
9. Embedded classes (if applicable)

## Units

Whenever possible, all applicable variables should be wrapped in corresponding Unit classes. Additionally, when they are converted into primitive types, they should be referred to with the specific unit that was used to unwrap them. This includes all instances of logging units.

## Documentation

Whenever possible, we recommend adding javadoc comments above class and method headers. While not every method necessarily requires this, it is always best to err on the side of too much documentation rather than not enough. By documenting software, it makes testing and debugging far easier and therefore it takes less time to test our robots.

A “good” javadoc comment should include the following:

- Description of the class or method  
- @param notations  
- @return notations  
- @throws/exception if applicable  
- @see if other class/methods should be referenced  
- @author (optional) is useful when other members of the team have questions about your code

A javadoc CheatSheet can be found [here](https://gist.github.com/ashishrana160796/4ac492caa9b306eac0adb3716e8b76d3)

## Lombok

Lombok is a library that automatically generates boilerplate Java code. We only really use ‘@Getter’ and ‘@Setter’. This is for class-level variables to avoid large swaths of boilerplate getter and setter methods.  

While the use of lombok is not strictly required, it increases readability. In order to set up Lombok, add this to the dependencies in build.gradle:  
`compileOnly 'org.projectlombok:lombok:1.18.48'`  
`annotationProcessor 'org.projectlombok:lombok:1.18.48'`

(Look up updated versions, the ones posed here might not be up to date depending on when this is being read)

## Unbounded Loops

Whenever using loops that don’t contain coroutine.yield() method calls, the end point of the loop should be finite, predictable, and constant. Because of this rule, while loops should never be used outside of commands (which fall under the reason for the coroutine.yield() exception) as waiting for a condition to become true will almost always violate the requirement for loop endpoints to be finite and predictable.

## Recursion

Recursive methods are avoided entirely. While it is possible to add a set endpoint in recursive loops and satisfy the unbounded loops rule, recursion in general leads to far less readability and makes code harder to understand without sufficient benefit.

## Mechanism/Subsystem Structure

For the majority of our mechanisms/subsystems, we require that they be created as a singleton. This makes sure that it is impossible to create more than one instance of them which could cause errors to be thrown (especially if the class creates motor objects). It is not always necessary for these to be singletons, but in those cases, such classes could likely be abstract or interfaces.  

The best example of non-singleton mechanisms/subsystems is Roller and Servo mechanisms/subsystems. These are custom abstract classes that we have used that generalize the majority of mechanisms/subsystems created. The Roller is designed to be an abstraction of any mechanisms/subsystems that spins motor(s) at a target velocity. Similarly, Servos are an abstraction of any mechanisms/subsystems that spins motors to a target angle. It is generally good practice to break down mechanisms/subsystems into these components (like a pivoting shooter would break into a pivot and a shooter) in order to take advantage of the already written and tested code.  

Additionally, mechanisms/subsystems classes should refer to the section on class structure for more specific guides on how to structure classes for better readability and consistency.

## Constants

In the past, having a single unified Constants.java file caused significant issues in both frequent merge conflicts as well as significantly more time spent locating specific constants within the file. Instead, we split up the constants into individual Subsystem/Mechanism constants files (e.g. IntakeConstants.java, ShooterConstants.java), as well as keeping the Constants.java file for all robot wide constants.  

Additionally, having a file dedicated to the location of field elements (FieldConstants.java) is useful, especially when they are frequently referenced across multiple files compared to declaring them locally or keeping them in the same location as robot based constants.

## Team Library

The team library is a collection of classes that are often used year to year that is designed to allow for more time being spent writing more complex code without worrying about testing the underlying components. When adding something to the team library, it is best practice to make sure that it is tested and functions as intended. Additionally, writing documentation in the library makes it far easier for future programming team members to understand and build onto the pre-written code. 

If you are adding classes that originated from another team’s library, it should NOT be added under our own section of the library. Instead, a new section should be added under their team name in order to correctly credit who wrote it. Doing this also allows maintainers to go back to the original source code when it comes time to update the software to newer versions of WPILib (and other dependencies).  
