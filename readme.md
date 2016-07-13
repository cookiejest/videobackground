#Qlik Sense Video Background

Add video backgrounds in Qlik Sense Apps. Use the data model to change the background video or image.

See full description and details at http://www.webofwork.com/qlik-sense-video-background-extension

Built for Qlik Sense 2.2.4>

Built by Adam Cooke (http://webofwork.com/)

##About:


Use the powerful associative data engine of Qlik Sense with video (mp4s or other media types) to create visually appealing dashboards in native Qlik Sense. You can also use this to change the dashboard background color.


MOVINGVIDEO

Example Use cases:
- Use for a static background

##Known Limitations
- This currently only works when viewing through a browser that is supported by Qlik Sense. Video backgrounds do not work in Qlik Sense Desktop.

You can still do demos using Qlik Sense Desktop by running Qlik Sense Desktop and then typing http://localhost:4848/hub into your browser.


##Prerequisites
- Qlik Sense 2.2 or higher


##Step 1 - Install the extension
- For Qlik Sense Desktop - Download the zip file, unzip the file and drop the video backgrounds folder into C:\Users\[USERNAME]\Documents\Qlik\Sense\Extensions\ 

- For Qlik Sense Server - Download the zip file and upload the zip file through the Qlik Management Console (QMC) on the extensions tab


##Step 2 - Add the extension into Qlik Sense on the app landing page (video backgound will only begin when the sheet with the object is navigated too).


##Settings
The extension requires three settings inside appearence >background info

1. *Media URL* - **Required** - This is an absolute path to a mp4 or video format. 
2. *Transparency* - **Required** - This is a number between 0 (transparent) and 1 (not transparent), this is the color overlayed on the video background.
3. *Background Hex Color* - **Required** - This is any hex color value that will be the color of the background (e.g '#FFFFFF' for white).

##Debug Mode

Debug mode will turn on/off the console logging inside the developer tools so you can see whats going on with the extension


##Credits:
- http://vodkabears.github.io/vide/