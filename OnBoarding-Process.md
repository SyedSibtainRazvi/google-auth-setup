### Philosophy

Open company. Everyone can see:
- What we are charging for every project
- Share expense reports with a scanned copy and it gets reimbursed
- Communication on Slack
- Flat hierarchy.

### On boarding process  

Make sure you have a Github account
and the public key set there is valid.
Check `https://github.com/<github-username>.keys`

Steps:

- Create a new email account at <username>@codemancers.com
- Get a slack invite using the codemancers.com email created in step (1) 
- Get a 2 liner intro from the new member and introduced him to the team.
- Send out a welcome email to the new member. 
- Give the github user "Team member" credentials to https://github.com/organizations/code-mancers/teams/101005
- Create account on codemancers trello. Used for tracking features and bugs.
- Give access to google drive account which stores ebook and software licenses 
- Add on mailing list - team@codemancers.com

We usually use trello for tracking bugs and stories.
The Github commits messages are tagged with trello-card so it shows up on trello.
We create new branches on Github for features and bugs.
Strong focus on code-review.

### Servers  
ssh beaver@build.codemancers.com -p 24500 it is our CI server, staging server, demo server etc.
http://build.codemancers.com:8080/ is CI server end point.

The servers are bare metal servers hosted on Hetzner.

### Everyone should go through:

- https://github.com/code-mancers/codemancers/wiki/Etiquette's-of-Working-from-home

### TODO  
- Laptop script to configure servers
- List of old/existing projects. Their stack and the setup scripts
- Build all servers using chef/puppet so that keys can be managed automatically