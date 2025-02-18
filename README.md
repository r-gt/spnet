# SPNET  

An "out of the ordinary" sounding board.  
Everyone's interactions result in a "beautiful" symphony of noises for the host!  


## Installation
1. Install [Node.js]( https://nodejs.org/) on your system, the process may be different depending on your operating system.  
2. Download the source code by cloning the repository or downloading it from the [Releases]( https://github.com/r-gt/spnet/releases/tag/main) page.
3. Open the CMD (terminal for macOS and Linux users) from there go to the directory where the code is and run:
	```
   npm install
	```
	if everything went fine, npm should install the needed dependencies and SPNET should be ready to use!

## Usage
1. Get as many sounds you like (you can download them from sites like [myinstants](https://www.myinstants.com/en/index/us/), [soundbuttonsworld](https://soundbuttonsworld.com/) or ay other you like) and give them well descriptive names (that's how they'll be named inside the soundboard). 
2. Place the sounds you got inside the **sounds** folder, here's a list with the compatible formats:
  -   MP3
  -   WAV
  -   Vorbis (OGG)
  -   FLAC
  -   MP4
  -   AAC
4. Start SPNET, with the CMD or terminal, go to the directory with your spnet instalation. then run:
    ```
    npm start spnet
    ```  

    if everything went correctly you should see a list with the sounds you have installed.

## Connection
if you only want to use it as a local soundboard, open your web browser and go to `localhost:3000` and done! you have your personal sound panel working!

*BUT!* if you want other people to annoy you anytime they want, a few extra steps are needed:

- **Tunneling:** this techique lets everyone with a link to access your soundboard from anywhere, some recommended tools to do this are [Cloudflared](https://github.com/cloudflare/cloudflared), [Telebit](https://telebit.cloud/) or [Ngrok](https://ngrok.com/).

 -  **Port fowarding (Not recommended):** this lets everyone with access to your soundboard with your ip address, this might be risky to share and needs you to configure your router.  

***
*not gonna ask for donations, this took me less than an hour :P*
