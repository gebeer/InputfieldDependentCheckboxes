#InputfieldDependentCheckboxes
**This module is in early stage of development - use at your own risk**

##An Inputfield for ProcessWire admin interface that handles the display of dependent checkboxes in page fields
Sometimes we need checkboxes to depend on other checkboxes in our page edit forms. This module adds this functionality for 2 or more checkbox fields to standard page field checkboxes.
![Screenshot of inputfield in action](/images/demo-1.gif)



## Installation
1. Copy all of the files for this module into /site/modules/InputfieldDependentCheckboxes/
2. In your admin, go to the Modules screen and click "Refresh". Under the 'Inputfield' section, install the 'InputfieldDependentCheckboxes' module.
3. Open Modules->Configure->InputfieldPage. Under 'Inputfield modules available for page selection' add 'DependentCheckboxes' from the select dropdown and submit
![Screenshot of install setting](/images/install-1.png)

##Field Setup
This inputfield extends that standard checkboxes of page fields. Therefore you need to have page fields configured already that you can extend with this Inputfield type.

###Prerequisites
You need to have at least 2 fields of type page that have 'Checkboxes' defined as Input field type and live on the same template.

A real world example:
There are different types of instructors. Each instructor type can have multiple different certifications.
For this to happen, we need 2 page fields (multiple):
a) instructor_types: lists pages with template 'instructor_type'
b) certifications: lists pages with template 'certification'
The certification template needs to have the instructor_types page field to assign one or more instructor_type to a certification.

###Setup (link checkbox fields)
Edit your page field a and go to the 'Input' Tab. Under 'Input field type' choose 'DependentCheckboxes'. Hit save. Now under 'Choose the target checkboxes field' choose the name of your field b. Hit save again.
![Screenshot of field setting](/images/setup-1.png)


Your fields should be setup. If you now edit a page that contains the 2 fields, the dependent checkboxes should be working. 
