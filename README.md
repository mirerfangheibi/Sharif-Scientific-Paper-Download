# Sharif Scientific Paper Download


This is a Google Chrome extension that helps the research community in Sharif University of Technology in downloading their desired scientific papers, which are supported by the semantak system. The extension will work in the university network, and it won't work either outside of SUT nor other university networks. Also, it uses Sharif University of Technology subscriptions and doesn't get help from external sources. 

In this version, only IEEEXplore and ACM Digital Library, as two primary computer science publishers, are being supported. For other publishers, you have to submit a request as usual to the university library or semantak, or if you are frequently using a certain one, it's nice to extend the capabilities of the extension using the instructions in the "Extending" section.

# Usage
1- Download the master branch

2- Unzip the downloaded zip
3- Go to the 'Extensions' in Google Chrome
4- Enable the developer mode
5- Use the "Load unpacked" button to locate the previously extracted folder
6- Enjoy!

# Extending
For adding the other publishers, after figuring the pattern of desired publisher's URL, follow the procedure below:
1- Add the home directory of it to the "supported_publishers" array in the "popup.js".
2- Add the equivalent semantak URL to the "supported_publishers_semantak" array in the "popup.js".
3- Add a distinct "case" bounded to your wanted publisher to the "switch" statement in the "Download" function.

# Disclaimer

This extension is neither endorsed nor approved by Sharif University of Technology.
