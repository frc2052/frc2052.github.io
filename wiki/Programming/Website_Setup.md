# Website Setup

## Hosting

KnightKrawler uses [GitHub Pages](https://docs.github.com/en/pages) for our web hosting. GitHub pages are free and allow us to connect our domain [Team2052.com](http://Team2052.com) to the site. 

Many teams use Wordpress or another content provider to create their website. KnightKrawler abandoned Wordpress in 2018 after constant required security upgrades of Wordpress broke the theme (which was no longer supported) for the second time. Rather than rebuild the site from scratch again, the team moved to GitHub pages.

GitHub pages are static websites. This means there is no code execution happening when a page is requested. In turn this removes most if not all security vulnerabilities associated with Wordpress sites. No more required security updates. No more broken themes and layouts. There are multiple YouTube videos and websites dedicated to getting your GitHub pages site setup on GitHub.com the first time. We will not cover that here since KnightKrawler’s hosting is already set up.

GitHub pages uses a program called Jekyll to compile the pages. Jekyll allows you to build common parts of your site in pieces, such as the header, footer, and menus and then join them to your content pages. This allows you to avoid duplicating your header and menus over and over on every page, making it difficult to make changes to your menus or sites look and feel. 

For more detailed information about Jekyll and common layout pages, there are many tutorials available online to get you started with building a Jekyll site from scratch, and gaining a deeper understanding of how a static page compiler like Jekyll works.

## Setup Steps for KnightKrawler Students

If your computer does not currently have the website repository cloned

* Login to [GitHub.com](http://GitHub.com).   
* Find the repository [frc2052.github.io](https://github.com/frc2052/frc2052.github.io)  
* Copy the URL for the repository  
* Clone the repo to your computer using your favorite git tool (Github Desktop).

### Command Prompt and Terminal

Running Jekyll will require you to gain some familiarity with the command line on your computer. On windows, the application you want to launch is called “Command Prompt”. On mac, you will open the “Terminal” application. There are some slight differences in what you will run in the terminal and command prompt, but for now consider any reference to “terminal”, “command prompt” and “command line” to be the same thing. Differences between mac and windows will be called out specifically, if they exist. Find these applications on your computer and run them now. They both open a text interface to work with your computer. More on this in a minute. 

Additionally, when we discuss the command line, we often talk about “directories”; these are the same as “folders”. People began using the word “folder” instead of a directory when computers started visually showing directories by using a “folder” icon.

### Installing Ruby and Jekyll

If your computer has never run Jekyll, the steps to install Jekyll can seem overwhelming but are only a few detailed steps. Follow the instructions on the [Jekyll installation page](https://jekyllrb.com/docs/installation/), but we have also listed the steps for verification below.

Jekyll requires the “ruby” programming language to be installed on your computer.  
Check to see if ruby is installed on your computer using the command line “ruby \-v”  
This command will show you what version of ruby is installed, if it is installed. Copy and paste or type this “ruby \-v” command into your command line window. If ruby is installed, it will show you the current version.

If not installed, you can find the installation guides for each platform on this page.   
[https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

If you are installing on a Mac, click the Mac link at the bottom of the page and follow those instructions. Detailed mac instructions are not included on this wiki.

### Windows

For Windows, click the “Windows” link at the bottom of the page, which should go to the [windows installation instructions](https://jekyllrb.com/docs/installation/windows/). 

When selecting the windows ruby installation package from [this page](https://rubyinstaller.org/downloads/)  
Choose the most recent version with dev kit. Pick the platform. For windows, choose the “(x64)” package. Nearly all windows machines are x64 so this is a safe choice. You may be prompted that this package cannot be verified and additional prompts about trusting the package. This is expected. If you know how to verify the package is authentic you can do that now, or you can just install and trust the package.

The following is a repeat of [these instructions](https://jekyllrb.com/docs/installation/windows/).

1. Run the installer you downloaded. Take default options when the terminal window opens and prompts for more installation options, pick the option from step 2\.  
2. Select option 2, as mentioned in the installation guide  
3. Install the jekyll bundle in a new command prompt window  
4. Verify Jekyll is installed with “jekyll \-v”

### Running the Website

For these instructions, let's assume you have cloned your website repo into a folder in your Documents folder. Specifically Documents \-\> GitHub \-\> frc2052.github.io

In a new command line window use “cd” and “dir” to navigate to the location of your website code. For both Windows and Mac, when you open a new command prompt (or terminal) window, the window should open at your home or user folder. 

For both Windows and Mac, you can use the command “cd” (change directory) to move from your home directory to your website repo.

cd Documents \[ENTER\]  
cd GitHub \[ENTER\]  
cd frc2052.github.io \[ENTER\]

Mac is case sensitive, windows is not. On both systems you can hit \[TAB\] after starting the directory (folder) name and if the system can guess which directory you are looking for, it will auto complete the name.

Additionally there are two other important command line commands to know. If you are ever unsure what directory you are currently in, you can type “pwd \[ENTER\]” (Present Working Directory) on Mac, and on windows you can type “cd \[ENTER\]” with nothing behind it. Both will show you your current directory.

Lastly, if you want to see what is in your current directory, including what sub-directories (folders) are in this directory (folder), you can type “dir \[ENTER\]” (directory) on Windows and “ls \[ENTER\]” (list) on Mac. 

Once you have used the command line to navigate to the directory containing your website you are ready to start the Jekyll server. 

The very first time you attempt to run the website locally, you must run “bundle update” This will install all the required bundles for Jekyll to run. If you ever get an error while attempting to start Jekyll, it is possible a new package was added by someone. You should first try to resolve the error by running “bundle update”.

To start the website on Windows (while in the root of your website folder: [frc2052.github.io](http://frc2052.github.io)) run this command “bundle exec jekyll serve”. It may take 5-10 seconds. The command prompt should tell you Jekyll has started and given you a URL of “[https://127.0.0.1:4000](https://127.0.0.1:4000)” This will be the URL you can use to see the website running on your computer. On Mac, you need only type “jekyll serve” to run the same process.

### Editing the Web Pages

With the site running. Open a browser to the local address ([https://127.0.0.1:4000](https://127.0.0.1:4000)). There are multiple editors you can use to edit your webpages, including the WPI Lib version of VS Code. Since WPI Lib VS Code should be installed on KnightKrawler laptops, you can open that program. Under the File menu, select “Open Folder” and open the website folder (Example: Documents/GitHub/[frc2052.github.io](http://frc2052.github.io)). If you are on a Mac or Windows machine that does not have WPI Lib installed, you can download and install the standard version of VS Code from Microsoft.

As you edit pages in VS Code, Jekyll will immediately recompile the website when you save your files. You can refresh your browser for any pages on the local address and see the page updates within seconds of saving the file.

Remember: just like editing robot code, always switch to the main branch, pull code, then either create a new branch, or switch back to your personal branch and merge main into your branch. Never make changes on the main branch. You will not be allowed to push new code directly to main.

Once you have the local version of the website correctly displaying the changes you made, commit your code and push your personal branch to github,  then create a pull request.

### Next Steps

This completes the setup instructions for preparing your Windows and Mac computer so you can edit the web site pages. A future document will be added to explain how the website is organized and where to add new files. Ask a mentor or captain for help in getting started with edits to the site.