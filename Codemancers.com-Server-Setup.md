Steps done:

1. Created hetzner instance. Applied Ubuntu 14.04 (with one ssh public key) and requested auto reboot.
2. Logged in as root. Installed mosh.
3. Changed default ssh port from 22 to 24500. Turned off SSH password login.
4. Created `www` user and added to sudoers group. Also added `www ALL=(ALL) NOPASSWD: ALL` to `/etc/sudoers` to disable password prompt for sudo commands.
5. Set up ufw. Rules:

    ```
    To                         Action      From
    --                         ------      ----
    24500/tcp                  ALLOW       Anywhere
    80/tcp                     ALLOW       Anywhere
    60000:60010/udp            ALLOW       Anywhere
    24500/tcp (v6)             ALLOW       Anywhere (v6)
    80/tcp (v6)                ALLOW       Anywhere (v6)
    60000:60010/udp (v6)       ALLOW       Anywhere (v6)
    ```
6. Enabled ssh agent forwarding by adding `AllowAgentForwarding yes` to `/etc/ssh/sshd_config` and restarting ssh using `restart ssh`.
7. Added `jenkins` user's public key to authorized keys.
8. Removed existing entry for `showntale.com` from `~/.ssh/known_hosts` file in jenkins user.



____

Steps for setting up websites:

1. Install git: `sudo apt-get install git`
2. Install nginx: `sudo apt-get install nginx`
3. Install ruby: 
  * `sudo apt-get install ruby`
  * `sudo apt-get install ruby-dev`

4. Create /srv/www folder
  * Set permissions for this folder
    * /srv → 755, www user
    * /srv/<internal folders> → 775, www user

5. Clone codemancers/engineering-blog locally and run:

    * `bundle exec cap deploy:setup`
      * This will setup proper permissions and folder structure
    * bundle exec cap deploy
      * This will install everything in proper place

Repeat step 5 for every website (tips/crypt, codemancers.com, optionally GCRC)

Config for business blog + codemancers.com. (Business blog is hosted at `codemancers.com/blog`)

```nginx
server {
   listen 80;
   server_name www.codemancers.com codemancers.com;
   root /srv/codemancers/current/output;

   location ^~ /blog {
      alias /srv/business_blog/current/output;
   }
   index index.html;
}
```

`server_name` should be the hostnames applicable. For example:

    server_name codemancers.com www.codemancers.com;

`root` will be the physical location on the machine
