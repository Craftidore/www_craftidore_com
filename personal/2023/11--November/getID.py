#/bin/python3
import re

def main():
    f = open("/home/fbcraspi/Desktop/temp", "r")
    string = f.read()
    match = re.search('(?<={"channelFeaturedContentRenderer":{"items":\[{"videoRenderer":{"videoId":").*?(?=")', string)
    print("https://youtube.com/watch?v=" + match[0])

if __name__ == "__main__":
    main()
