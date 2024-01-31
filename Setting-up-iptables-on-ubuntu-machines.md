### Have a look at default rules:

`~> sudo iptables -L`

If it is empty, that means every connection from anywhere is allowed. If it is not empty and you want to start from scratch run following command:

`~> sudo iptables -F`

### Using starter rules, setup iptables

I use [these rules](https://gist.github.com/gnufied/cb19365e9387768a316c). Paste them in a file called - `/etc/iptables.rules.up` and then following command to make the Kernel use these rules:

`~> sudo iptables-restore < /etc/iptables.up.rules`

Verify if rules are working:

`~> sudo iptables -L`

### Ensuring that rules get reapplied on reboot

If not done properly rules will be lost on reboot and hence lets create a script that restores these rules:

`~> sudo vim /etc/network/if-pre-up.d/iptables`

and add following content to the file:

```
#!/bin/sh
/sbin/iptables-restore < /etc/iptables.up.rules
```

Make that file executable:

`~> sudo chmod +x /etc/network/if-pre-up.d/iptables`

And voila you should have working firewall rules.