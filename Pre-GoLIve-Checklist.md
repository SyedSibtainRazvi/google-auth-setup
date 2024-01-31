## Things to check and do before going live

* make sure to use a `background queue` like [Sidekiq](http://sidekiq.org/)   
  or [Resque](https://github.com/resque/resque).   
  Makes sense if we can do something in the background outside the normal http request-response. eg. sending emails  

* check the [YSlow](http://developer.yahoo.com/yslow/) and/or   
  [Google Pagespeed](https://developers.google.com/speed/pagespeed/) scores for frontend problems  
  test in rails staging/production environment where assets are bundled  

* use a CDN like `Amazon Cloudfront` if it makes sense.   
  can use [AssetSync gem](https://github.com/rumblelabs/asset_sync) for it  
  
* in rails production settings, make sure assets are bundled. we should bundle assets not serve multiple files  
 
* enable [New Relic](http://newrelic.com/) for checking slow queries and pages  
  can also use it to collect server uptime, memory and load data as well  

* enable error logging and reporting. eg [Airbrake](https://airbrake.io/)  
  what should we use for javascript error logging ? [Errorception](https://errorception.com/)  

* enable log rotation for `nginx`, `passenger` and `rails` server  
  otherwise server will get slower over time and can fail if disks get full  

* make sure server are setup using `init.d` or some such  
  will make sure services will come-up automatically when server is restarted    

* document the deployment process, preferably in the project README itself    

* document the network topology, which servers are we using, names and specs  
  how are the servers connected together  
  what are they used for ie. roles  
  eg. server1 is the database, server2 is the load balancer and server3 and 4 is the rails box  
  get the server usernames and passwords, preferably use ssh keys not passwords  

* figure out with client what are their reporting and monitoring needs ?  
  if they use a `nagios` or some such, they might need small healthcheck HTTP endpoints and scripts ?  

* should we worry about backups ? databases will need special attention i guess ?  

* Make sure HTTPS is on and that everything still works over HTTPS.