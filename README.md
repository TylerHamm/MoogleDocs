# docbot
Discord Bot that helps keep track of specific messages by tags to make it harder to miss important information.

### Setting up Sheets Auth

1. [Go to Credentials page of Cloud Console](https://console.cloud.google.com/apis/credentials)
1. Pick an appropriate project (found at the top of the page in the menu bar)
1. "Create Consent Screen" (values don't matter much, just fill out required fields)
   - Add your Google Account as a "Test User"
   - Get all the way through past the "Back to Dashboard" button, don't publish.
1. Go back to the Credentials screen, click "Create Credentials" then "OAuth client ID"
1. Create a **DESKTOP APP**
1. Download the credentials as google-credentials.json in project root.

You will need to log in with your Google Account the next time the bot launches to set up token.json.
If there are problems with token.json, just delete it.

Creating a service account is a better approach and should be used in the future.