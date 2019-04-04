Ever wish that you saw fewer links from certain publishers? Perhaps they require a paid subscription but you can't afford one and don't like to be reminded. Or maybe you're just not into what they publish.
This script for Tampermonkey / Greasemonkey / Your Favorite UserScripts plugin moves links on HN from sites you would like to ignore to the bottom of the page.

Here's how to use it:
1. Install your favorite UserScripts plugin for your browser. I use Tampermonkey (http://tampermonkey.net).
2. Open your Tampermonkey Dashboard found in the Tampermonkey menu.
3. Select the option to create a new script (The "+" sign). This will open up the script editor.
4. Copy and paste the contents of main.js into your script editor.
5. This next part is important and easy - just needs a bit of care: There's a "SITES_TO_MOVE" list of strings. Edit it to your liking: sites that you include will be demoted.
6. File -> Save
7. Refresh your hacker news page and you'll see that links from sites that you don't want to see have been moved to the bottom of the page.
