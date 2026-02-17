# Git and Github Training

Programming your robot can be a challenge. Having poor source control can make it much harder.

## What is Source Control?

Source control, also known as version control, is a system that helps programmers track and manage changes to their code over time. It allows multiple developers to collaborate on a project without overwriting each other's work, by maintaining a history of every modification made to the codebase. Tools like Git, and platforms such as GitHub, provide powerful features for branching, merging, and reviewing changes, making it easier to experiment, fix bugs, and roll back to previous versions if needed. In essence, source control acts as a safety net and collaboration hub, ensuring code integrity and team productivity throughout the development lifecycle.

## What are examples of poor (or missing) source control?

* The only place to find the current code is on one laptop  
* Copy-Paste the code into a folder each week with a date for a name  
* Only one student knows where the code is located  
* The code is passed from one student to another on a thumb drive or shared folder  
* No one can find code from previous seasons  
* You have many code folders with names like “RobotCode\_v3\_final\_final\_gold\_c”

## Git vs GitHub

Git is the program that implements source control, including version history, branching, and merging. Git is the dominant source control technology used in the software industry. GitHub is one of many online code repositories that works with git. In git, your code project is also a repository. GitHub can be your remote repository that all students on your team use to collaborate. 

## Repository (aka Repo)

A repository is where your code lives. You will have a local repository on your computer, which looks like a typical folder. You will also have a remote repository hosted by a site such as [GitHub.com](http://GitHub.com). These two repositories will be linked, allowing you to transfer changes between the remote repository (aka Server/Cloud) to your local repository (folder on your computer). It does not matter which repository you create first. You can login into [GitHub.com](http://GitHub.com), create an empty repository with the name of a new project, clone the repo locally, then copy your robot project into this folder. Or you can create a remote repo using a code folder that already exists on the client. All other developers can then clone the repo from GitHub to start collaborating. Cloning a remote repository makes a copy on your computer and creates the link so changes can be synced. 

There is a hidden folder in your project named “.git”. This folder is the local repository and is basically a database of the project history. The repository remembers every change to every file ever made to your project, by any users, across all branches. You may review the history at any time and review every change made.

## Branches

Branches are isolated versions of a codebase that allow developers to work on new features, bug fixes, or experiments without affecting the main project. By creating a branch, you can make changes freely and test ideas in a controlled environment. Once the work is complete and verified, the branch can be merged back into the main branch. This workflow promotes collaboration, reduces risk, and keeps the primary codebase stable. Platforms like GitHub make it easy to create, switch, and manage branches, enabling teams to develop in parallel and maintain a clean development history. 

The term “branches” is often analogous to a tree structure, but in the case of software it may make more sense to think of branches as it relates to a railroad. Occasionally a railroad may have a rail line that branches off, to pick up freight or passengers, but then returns to the main rail line. Creating a branch in software means that you are logically (but not physically)  making a copy of the code to make changes on the side, when your new code is ready (ready for testing or verified as working), it can be merged back in with the main codebase. The best part of doing this in git is that copies are all managed in the same folder. You as the programmer do not actually copy files to a new folder. That would be a mess. Instead, when you switch branches git will change all the files in the folder for you. When you switch back to your previous branch, git will once again change all the files to get back to the original state of every file. Remember, git knows the history of every file on every branch. It known how to put the files back the way they were. It is like programming magic.

## Merging and Conflicts

Merging is the process of integrating changes from one branch of code into another, typically used when combining feature work into a main development branch. While merging is often seamless, conflicts can occur when two branches modify the same part of a file in incompatible ways. These merge conflicts require manual resolution, where a developer must decide which changes to keep, discard, or combine. Tools like Git and platforms such as GitHub provide visual interfaces and command-line options to help identify and resolve these conflicts. Understanding how to manage merges and resolve conflicts is essential for maintaining a clean, collaborative codebase.

## Commit

Once you have made a change to the code and it is ready for other developers to use, there are several steps to make sure your code is part of the main codebase.

Committing your code is like “checking-in” or making a “snap-shot” of your code at a point in time. A commit happens locally, on your computer. It is a good policy to commit regularly. You may want to commit when

* You’ve completed a feature or bug fix  
* You are done working for the day  
* You are about to make some major changes but have uncommitted changes

When you make a commit, you must include a comment. The comment should describe what you did. These are examples of bad commit comments:

* Maria made changes  
* Bug fix  
* Thursday’s code

These are better comments:

* Adjusted shooter speed  
* Fixed elevator bug, now holds position  
* New intake subsystem added \- NOT ready for testing  
* Intake feature complete \- ready for testing

## Push and Pull

Push, also known as Publish or Sync in some tools, will attempt to push changes from your local branch to the remote repository. Some call this “pushing to github”, “push to the server” or “push to the cloud”. You cannot push if you have local changes that are not committed to your local repository. You must commit before you can push. There are advanced concepts like stashing changes or ignoring new files, but we will ignore those for now. In general, you will always commit before pushing.

Pull is the opposite of push. A pull will bring changes from the remote repository down to your machine. Again, you want to have all changes committed before pulling from the server.

Both pulling and pushing can result in an automatic merge. All merges have the potential for a conflict. If a push would result in a conflict on the remote repository the push will fail. If a pull results in a merge conflict, you will need to resolve the merge conflict by fixing the problems. Be sure to immediately commit the changes to your local repository once you have fixed the merge issues and your code compiles again.

## Resolving Merge Conflicts

Merge conflicts can be tricky. How easy or hard it can be to resolve conflicts depends on how big the change may be. Many git tools can make resolving the conflict easier. We will not cover how to solve a merge conflict here because it varies so much. The merge could be more difficult, requiring you to manually fix or rewrite many lines of code. It could also be easy where your git tool gives you the option to “use my code” or “use their code”. Following a good workflow can significantly reduce the number of git merge conflicts you encounter.

## Good Git Workflow

Following these steps can save headaches and conflicts

1. From the MAIN branch, create a new branch.  
2. Branch names should be programmer name and/or the feature your building  
3. Switch to the new branch (often automatic on branch creation, depending on tool)  
4. Make code changes  
5. Commit code for the day with good comment  
6. Push to remote repository (github/server/cloud)  
7. If you are going to continue to work on code from home or a different computer  
   1. If you haven’t yet, clone the remote repository on your new computer  
   2. Switch to your branch (this may be listed as “remote/MyBranch”  
   3. Pull  
   4. Make code changes  
   5. Commit with good comment  
   6. Push  
8. At the next meeting: Pull (changes on your branch you or another programmer made)  
9. Make code changes  
10. Commit with good comment  
11. Push

To merge your code into the main branch, first bring the main branch into your code.

1. Switch to Main branch  
2. Pull  
3. Switch back to your branch  
4. Merge Main into your branch  
5. If there are merge conflicts  
   1. Fix merge conflicts  
   2. Commit changes (the comment is usually automatically set as a merge)  
6. Push  
7. Log into [GitHub.com](http://GitHub.com)  
8. In your repository on the website, create a pull request to merge your branch into main

## Pull Request

A pull request is a fancy merge on the remote repository (github). A pull request is usually submitted by one programmer, but reviewed and merged by a different programmer or multiple programmers. Other programmers will review your changes and either approve or reject the pull request. If changes are needed you can make them on your computer, then commit and push again. The pull request will automatically be updated if you are on the same feature branch.

Occasionally, someone else may have a pull request that updates the main branch while your pull request is waiting to be approved. This could result in a merge conflict on the pull request. While it is possible to resolve the conflict on [github.com](http://github.com), this can be dangerous. It is better to start over with the steps above to merge to main by switching to main, pull, merge, fix, commit, and push again. This way you can ensure the code compiles before you push back to github. No one wants to “break the build” on the main branch.

## Misc Branch Tips

Different teams have different approaches to managing feature branches. Some teams will re-use branches after a pull request, other teams will delete the feature branch once the pull request has been merged. It is safe to delete a branch once merged into the main branch because the main branch now contains all the history from the feature branch. There is no risk of losing all that history.

KnightKrawler has enabled a setting in GtiHub that prevents students from pushing code directly to the Main branch. All student code must be merged into the main branch using a pull request. Captains and Mentors on the programming team are administrators of the repository, and are the only people allowed to push directly to the main branch. Additionally, they are the only people allowed to approve their own pull requests.

## Conclusion

Git can be confusing when you are first getting started. However, understanding git and github can save your season.

* Lost or broken laptop at a regional? Borrow a laptop and pull your code  
* Discover that something that was working is now broken? Check the history and see what changed  
* Need to make temporary changes for a demo? Make a branch only for demos.  
* School closed for a snow storm? Pull code from home and keep working.  
* Need help from another team? Invite them to your repo and collaborate.  
* Want to re-use code from a previous year? You are supposed to open-source any code you re-use. Make last year’s code repository public and you’re all set.

