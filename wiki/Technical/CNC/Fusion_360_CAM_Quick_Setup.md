# Fusion 360 \- CAM Quick Setup

## Onshape Prep

* Choose your stock  
* Make a model of the stock in a new tab of the robot manufacturing document, then make an assembly with that model fixed to the origin. Give the assembly a meaningful name   
* Make a version of the main robot document, then import the parts you intend to cut into the assembly  
* Use planar mates to put the bottom of all parts on the same plane as the stock  
* Arrange the parts imbedded within the stock model at least ½” from each edge, ¼” from locations you will put fasteners, and ¼” (preferably more) apart from other parts  
* Right click the assembly tab, then export the entire assembly as a STEP file

## Fusion 360 Manufacture

* Import your assembly into a new document (File button \> Open \> “Open from my computer…”)  
* Click the “Design” button in the top left corner, then select “Manufacturing” from the dropdown  
* Make sure your units are set to inches (should be shown in top left corner)  
* Create a new setup by clicking the folder icon  
  * Set your stock point to the box point closest to the origin on the bottom of the material  
  * Set the “stock offset mode” to “From Solid,” then select the model of your material as your stock by clicking it  
  * In the top left corner of your screen, click the arrow to the left of “Models,” then the one to the left of “Unsaved,” then the eye icon next to your stock model in the dropdown to hide the stock  
* Use a template to make an operation  
  * Right click on your setup, then select “Create From Template” in the resulting menu  
  * Select “Choose Template” and navigate to Local\\2052CNCTemplates in the popup menu  
  * Select a template for a specific tool and operation  
  * Right click on the added operation, then click “Edit”  
  * Select part geometry and edit the operation as needed

## For every path under your setup

* Select “Post Process” under the “Actions” dropdown  
* Use the “ArtSoft Mach3Mill” post processor  
* Rename the file to something useful  
* Click “Post”  
* Files will be in your Documents folder under “Fusion360\\NC Programs”  
  