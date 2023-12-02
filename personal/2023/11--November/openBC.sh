#!/bin/sh
export DISPLAY=:0
killall chromium-browser
sleep 1
curl https://www.youtube.com/@fellowshipmaumelle/ > /home/fbcraspi/Desktop/temp
python /home/fbcraspi/Desktop/getID.py | sed "s/$/ --autoplay-policy=no-user-gesture-required/"| xargs chromium-browser
