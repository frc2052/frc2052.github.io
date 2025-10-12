# Omio X8 CNC Quick Setup

**Inspect the Area**

* Make sure the bed is clear  
* Make sure the carriage is unimpeded  
* Make sure the drag chains are clear

**Secure your material**

* You should have a least 4 points of the material secured, if there are any cutouts they should be secured with at least 2 screws  
* Verify in your CAM software the the endmill will not hit the hold downs  
* 

**Power on the CNC**

* Turn on the power strip  
* Verify the spindle coolant pump is running  
* Turn on the “Power” and “VFD-SP” on the black CNC controller box  
* Make sure the emergency stop button is out and turn clockwise. The CNC controller should start and you should see stuff on the display


**Setup Mach 3 Software**

* Run Mach 3 CNC from the Desktop. Choose the “USEME” profile and click OK  
* Load the g-code you created in Fusion 360 (File-\>Load G-Code)  
* Click the red Reset/Stop button. It should stop blinking  
* Click the “Reference All” button  
* Check Workspace Zero is sane (Position makes sense)  
* Type “G54” into the command line to set the work coordinates

**Jogging**

* Set Feed Rate to 100  
* Press the “Tab” key to open the jogging window  
* Use continuous “CONT” mode for rough positioning  
* Use incremental mode “INCR” for fine positioning  
* Keep hitting the “Jog Increments” button to get finer and finer adjustment  
* Position the X and Y Axes and click “X Zero” and “Y Zero”  
* Position the Z Axis on the spoilboard and click the “Z Zero”

**Cutting**

* Verify there is cutting fluid in the reservoir  
* Click the “Play” button to start cutting  
* Follow the prompts

**Emergency Stop**

* If harm will come to a person or the CNC, hit the “End” key, Reset/Stop button, or physical E-Stop button to disable the machine

Reference: G54 G00 G90 X0. Y0. Z0. This tells the machine to go to zero. Can omit the Z0.  
G28 set for reference home at the back of the machine