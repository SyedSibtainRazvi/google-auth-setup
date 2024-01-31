### Install fail2ban

`~> sudo apt-get install fail2ban`

### Copy the configuration file

`~> sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local`

### Modify the configuration file:

`~> sudo vim /etc/fail2ban/jail.local`

### Things to change:

* Change `destemail` to your or your team's email address so as any attempt to hack the machine results in an email to that account.
* If you have changed ssh port, change `port` section in `ssh` section:

```
[ssh]

enabled  = true
port     = 24500
filter   = sshd
logpath  = /var/log/auth.log
maxretry = 6
```

### Install sendmail if that is the transport agent:

`~> sudo apt-get install sendmail`

### Restart fail2ban

`~> sudo service fail2ban restart`

So thats it then.