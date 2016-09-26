#Qlik Sense Video Background

Add video backgrounds in Qlik Sense Apps. Use the data model to change the background video or image.

See a demo video and get the direct download link to the Zip and full description and details at http://www.webofwork.com/qlik-sense-video-background-extension

Built for Qlik Sense 2.2.4>

Built by Adam Cooke (http://webofwork.com/)

##About:


Use the powerful associative data engine of Qlik Sense with video (mp4s or other media types) to create visually appealing dashboards in native Qlik Sense. You can also use this to change the dashboard background color.


MOVINGVIDEO

Example Use cases:
- Use for a static background


##Known Limitations
- This currently only works when viewing through a browser that is supported by Qlik Sense. Video backgrounds do not work in Qlik Sense Desktop. You can still do demos using Qlik Sense Desktop by running Qlik Sense Desktop and then typing http://localhost:4848/hub into your browser.
- Qlik Sense 2.2 or higher
- For best performance the videos should be short clips < 20 seconds, internet speed will impact end user experience as the videos load from source.
- Video backgound will only begin when the sheet with the object is navigated too.
- The extension needs to be dropped on the app landing page, video background will only appear once user has navigated to sheet.

##Step 1 - Install the extension
- For Qlik Sense Desktop - Download the zip file, unzip the file and drop the video backgrounds folder into C:\Users\[USERNAME]\Documents\Qlik\Sense\Extensions\ 

- For Qlik Sense Server - Download the zip file and upload the zip file through the Qlik Management Console (QMC) on the extensions tab


##Step 2 - Drag and Drop the extension and configure


The extension requires three settings inside appearence >background info

1. *Media URL* - **Required** - This is an absolute path to a mp4 or video format. 
2. *Transparency* - **Required** - This is a number between 0 (transparent) and 1 (not transparent), this is the color overlayed on the video background.
3. *Background Hex Color* - **Required** - This is any hex color value that will be the color of the background (e.g '#FFFFFF' for white).

##Debug Mode

Debug mode will turn on/off the console logging inside the developer tools so you can see whats going on with the extension


##Credits:
- http://vodkabears.github.io/vide/