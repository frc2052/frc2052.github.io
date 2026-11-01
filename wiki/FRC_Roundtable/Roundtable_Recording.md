# How to Record the FRC Roundtable

Updated 10/26/2026

## Install Software

We recommend using [chocolatey.org](http://chocolatey.org) for your installation of free software for Windows.

### OBS (for recording)

Using chocolatey, run: *choco install obs-studio*

Direct download at [https\://obsproject.com/download](https://obsproject.com/download)

### DaVinci Resolve (video editing)

Direct download at [https\://www\.blackmagicdesign.com/event/davinciresolvedownload](https://www.blackmagicdesign.com/event/davinciresolvedownload) 

### Audacity (audio editing)

Using chocolatey, run: *choco install audacity*

Direct Download at [https\://www\.audacityteam.org/](https://www.audacityteam.org/) 

## 

## Recording the Call

OBS is used for the screen recording of the roundtable. The recording works best if done from a second computer. OBS will record the computer’s microphone plus the audio from the call, but your voice does not come through the browser when on the same computer. So, you need to leave your mic on inside OBS the whole time. Background noise can be distracting and can cause issues. Therefore recording works best from a second compute with the mics turned off.

Use the following steps to record the call:

1. Open the Google Meet link in any browser. You can stay in the waiting room and do not need to start the meeting yet.  
2. Start OBS  
3. Add your browser as a source. In the Sources panel at the bottom, click \+.  
   1. Windows: choose Window Capture, then pick your browser window from the Window dropdown.  
   2. Mac: choose macOS Screen Capture, set Method to "Window Capture," and select your browser. Grant screen-recording permission in System Settings if prompted.  
4. Fix a black screen if you see one. On Windows, set Capture Method to "Windows 10." If it's still black, turn off hardware acceleration in your browser's settings and restart the browser.  
5. Fit the window to the frame. Right-click the source, then choose Transform → Fit to screen.  
6. Set up audio. In the Audio Mixer, keep Desktop Audio on to capture browser sound. Keep Mic/Aux on if you're narrating, and mute it if you're not. Mute the audio (slide the volume to 0\) for the mic, if you are recording on a second computer. Also turn off your speakers on the second computer to avoid feedback.  
7. Choose output settings. Go to Settings → Output to set where recordings are saved and the format. MKV is safest because it survives crashes. Convert it to MP4 later with File → Remux Recordings, or pick "Hybrid MP4" if your OBS version offers it. Under Settings → Video, 30 fps is fine for most browser recordings.  
8. Record. Click Start Recording, do what you need in the browser, then click Stop Recording.  
9. Find your file. Go to File → Show Recordings. On windows the file is probably in your “Videos” folder.

## Editing the Video for YouTube

1. Open Davinci Resolve  
2. Start a new Project, name the project Roundtable\[Episode Number\]  
3. Drag the recording from OBS into the media library. If prompted that the projects media format doesn’t match the recording, click the “Change” button to change the project format.  
4. Find the intro and outro bumper files. These are the video files that play at the start and end of every video on Youtube. Drag these into the media library.  
5. Drag the Intro Video into the timeline from the media library  
6. Position the red timeline indicator at the end of the intro video.  
7. Drag the recording into the timeline from the media library  
8. Position the red timeline indicator at the end of the recording  
9. Drag the outro into the timeline from the media library  
10. Position the timeline at the start of the recording, after the timeline  
11. Play the video to find the point at which the host starts speaking, back the timeline up so that there is 1-2 seconds of dead air before the host starts speaking.  
12. At the very bottom of Davinci Resolve, there is a selector that sets your display, select the “Cut” panel, this will place a toolbar next to your playback controls that will include a scissors icon. Click the scissors icon to cut the recording of the roundtable into two segments Click the left (begining) part of the segment you just separated and press delete. The remaining roundtable recording segment should slide left to close the gap that is left.  
13. Repeat this process at the end of the recording to find a good place to transition into the outro segment.  
14. Play the video from the start, through the intro and 10-15 seconds into the recording to ensure the edit worked as expected. Skip to the end of the recording and backup 10-15 seconds. Play this to the end to ensure the editing at the end worked.   
15. Once editing is complete, select File \-\> Quick Export \-\> YouTube. Save the file name in MP4 format with the name Roundtable\[EpisodeNumber\].mp4

## 

## Uploading to YouTube

A user with access to upload to the FRC Roundtable channel is required.

1. Watch the first 60 seconds of the file to double check you have the right file and export worked correctly  
2. Upload the video  
3. Name the video “EP \[Episode Number\]:\[Title\]   
4. Create a 1-3 sentence description  
5. Select the FRC Roundtable playlist so all videos can be played in order  
6. Select any other playlists that are relevant to the video  
7. Select Not made for kids  
8. Accept the defaults and publish as Public

## Editing Audio for the Podcast

1. Open Audacity  
2. Load the MP4 video used for YouTube  
3. Select File \-\> Export Audio \-\> Save to computer  
4. Save the file as MP3 with the name name as the MP4 Video  
5. If the video has alot of visual content that will be difficult to following on audio, splice in the “Heads up this episode contains alot of visual content” MP3 after the standard intro

## 

## Publish the Podcast

1. Listen to the first 60 seconds of the file to ensure you have the right file and export worked correctly  
2. Login to Spotify for Creators.   
3. Name the video “EP \[Episode Number\]:\[Title\] (\[yyyy-mm-dd\])  
4. Use the same description as YouTube  
5. Publish once the file uploads

