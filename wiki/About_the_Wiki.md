# Welcome to the Team 2052 KnightKrawler Wiki

## Goals

There are two primary goals and many great side effects of creating the wiki. KnightKrawler is often asked how we operate some aspect of our team, while we have always been open in sharing our knowledge and offering advice, it depends on someone to respond, often off-the-cuff, and that leads to omissions.

Our first goal is an effort to be more complete and less repetitive in sharing advice. We decided to document the most commonly requested information so other teams can get the information they need in a more comprehensive source. This also helps new students and parents find information about the team in one location.

The second goal is to stop making lists on the whiteboard or the same list over and over in google docs because we couldn’t find the last list. Every time we need to pack for a competition, a demo at the elementary school, or a fundraiser at the farmers market, we are constantly making a new todo list, or a packing list. By adding these mundane task lists to the wiki, everyone knows the first place to look for the things we do every year, but maybe only once a year.

## How To Contribute as a KnightKrawler Student & Mentor

#### The boring technical stuff:

Our website is hosted in GitHub Pages. This uses a technology called Jekyll. Jekyll can create web pages from a special type of file called a “Markdown” file (.md).  This makes it very easy for anyone to create or add to the website without needing to be a programmer. Anyone can make the content, then a programmer can add it to the website in minutes.

#### Writing Content:

Our shared google drive folder all students have access to includes a folder called “Wiki” at the top level of the main folder. Inside the wiki folder are other folders that mimic the navigation structure of the website. Folders are named with correct capitalization and “\_” in place of spaces.

For people new to contributing to the wiki, please check with a captain or mentor before adding a new folder or renaming any files or folders.

To add a file, create a new google doc in the folder that matches the navigation that makes sense. Give your new document a name with good capitalization and “\_*” instead of spaces, such as “*Fundraising\_Advice”. Pick a 2-3 word title for the navigation link. No punctuation or special characters.

Add all your content to the document. Keep your formatting simple. The wiki is like a manual. Don’t add colors or special formatting. The program that converts the document to a web page will work on simple pages to make sure the style across the wiki is consistent.

After your document is complete, someone on our website team will download your document as a Markdown (.md) file and then publish it to the website.

## Formatting Tips

When creating documents, use the standard formatting styles from the toolbar. Using these styles will ensure the website will format your document correctly.

# Heading 1

## Heading 2

### Heading 3

* Bullets  
* Bullets  
* Bullets

1. Numbered  
2. List  
3. Of  
4. Stuff

**Bold** *Italics* and Underline are also fine for formatting. [Hyperlinks](https://team2052.com) also work. Unfortunately, images and photos are not automatically converted (yet).

## Page Tips

* Every page should have a “Heading 1” Title  
* Use “Heading 2” to organize sections of your document.   
* “Heading 3” can be used to title lists or other areas of your document that are not major topics of your document.  
* Avoid using font sizes directly to format your page. The webpage is styled to recognize the Heading tags.

## Technical Tips

The Wiki currently only supports 3 levels of hierarchy. Think of them as they would be laid out in a table of contents as Chapters, Sections, and Subsections. 

The table of contents and navigation are structured in these three levels. All documents and folders directly under the “/wiki/” folder in Google docs will be the top level (Chapters). Any documents and folder in a folder at the top level, will become the second level (Sections). All documents in this second level will become level 3 (Subsections).

(Chapter \= “How to Join”)  
/wiki/How\_to\_Join.md    

(Chapter \= “Fundraising”, Section \= “Overview”)  
/wiki/Fundraising/Overview.md 

(Chapter \= “Fundraising”, Section \= “Overview”, SubSection \= “Week Zero”)  
/wiki/Fundraising/Events/Week\_Zero.md 

If a file is named “\_index.md” the code that creates the webpage will make this document the title page for the section. For example, if you have a folder named “Fundraising” and in that folder, there is a file called “\_index.md”, the "Fundraising" chapter/section in the index will be clickable and show the index page as an overview. This is one way to ensure the most important document in a folder is seen first.

By default, all files and folders are sorted alphabetically when creating the navigation. However, let’s say you needed to create a specific order for the sections in your “Competitions” chapter. Let’s say you have these 4 pages. “Permission\_Forms.md” “Packing\_List.md” “Buddy\_System.md” and “Chaperones.md”.  By default these pages would build a navigation structure like this

* Buddy System  
* Chaperones  
* Packing\_List  
* Permission Forms

If you need to change the order, there is a way. The program that turns the markdown files into the navigation table of contents will look for a special “@” character in the file names. If you want the “Packing\_List.md” file to be second you can give it a name that would make it second alphabetically using the “@” to set a prefix. You can name the file “CA@Packing\_List.md”.  This will make the file now second in the list when sorted alphabetically. The special program that builds the navigation will remove the “CA@”, and create the list like this. 

* Buddy System  
* Permission Forms  
* Chaperones  
* Packing\_List