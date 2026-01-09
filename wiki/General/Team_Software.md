# Team Software

KnightKrawler uses Google Suite (**Docs, Sheets, Slides**) for all office related tasks. Additionally, the team uses **Canva** for most graphic design tasks, but also uses **Adobe Photoshop and Illustrator** through school licenses available to students, when the need for more powerful tools arise. 

## Installing Free Software on Team-owned Devices

There are a number of free software applications the team uses. This software may only be installed on laptops owned by the team (not school devices). Installing free software often comes with the risk that extra stuff might get installed. Browser toolbars, helper utilities and other “junk apps” that most people would rather avoid. 

KnightKrawler uses [Chocolatey.org](http://Chocolatey.org) to install free software on Windows laptops and avoid the extra “bloatware” packages that can come with free software. Chocolatey allows applications to be installed quickly and with greater confidence. The software being installed includes only the applications you desire without any extras. Packages also include a malware check.

## Install Chocolatey

Visit [https://chocolatey.org/install](https://chocolatey.org/install)

Follow the instructions on this page

* Run Windows PowerShell as an administrator (right click PowerShell in the start menu and select run as administrator)  
* Run the command specified to to set the execution policy “Set-ExecutionPolicy AllSigned”  
* Run the next command listed to install Chocolatey

## Install Applications

To install applications you can browse available applications from the community catalog. These packages are prepared by community contributors. While there is malware detection for packages, all packages should be installed at your own risk. Applications installed with Chocolatey use default options, default install locations, and no extra “bloatware”  like browser toolbars.

[https://community.chocolatey.org/packages](https://community.chocolatey.org/packages) 

KnightKrawler either currently uses or has used these commands to install helpful programs on our Windows laptops over the years. Once Chocolatey is installed, simply run any of these commands from inside any Powershell window (with Admin privileges) to install the desired apps.

choco install googlechrome  
choco install firefox  
choco install git  
choco install sourcetree  
choco install github-desktop  
choco install tortoisegit  
choco install etcher  
choco install paint.net  
choco install inkscape  
choco install gimp  
choco install atom  
choco install python  
choco install vlc  
choco install audacity  
choco install ffmpeg  
choco install jekyll  
choco install vscode

## Other software

Not all software can or should be installed with Chocolatey. WPI Lib is software that requires a complex installation. Visual Studio, VS Code, Unity, Android Studio, etc are also examples with complex installations and best installed through official distributions. Chocolatey is best used for freeware, shareware and utility applications. For open source applications with heavy utilization by your team, please consider making a financial contribution to support the developers of these products.