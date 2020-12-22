## How to keep your Discord backed up

1. <a href="https://www.writebots.com/discord-bot-token/">Setup your Discord bot</a>. You need to give it Administrative privileges. Get its token and put it in <a href="./backup.js">backup.js</a>. 

2. Install <a href="https://node.js.org">Node.js</a>. Install the prerequisite libraries with `npm install discord-backup`.

3. Run the bot with `node backup.js`. It should say "Ready".

4. Say "BACK US UP" in your Discord. This will save a file (BACKUP ID).json containing the messages of your Discord. However, it doesn't include attached files.

5. Install <a href="https://stedolan.github.io/jq/">jq</a> and extract the URLs of the attachments with the following command. Substitute the correct BACKUP ID.

```jq -r ".channels.categories | .[] | .children[] | select(.type != \"voice\") | .messages | .[] | .files | .[] | .attachment" < (BACKUP ID).json > urls.txt```

6. Download the URLs in `urls.txt` with `wget -r -l 0 -i urls.txt`.
