# Usage metrics

As a project grows, it becomes evident that there will be a lot of collections. It
is possible that a bunch of collections might not be touched or used over a period
of time. There is no way of knowing what collections are useful and what are not.

Take that problem, and add dynamic blocks to the mix. There is no neat way to know
what all dynamic blocks are used throught the app.

Ofcourse, all this data is present in the database, but there is no easy way to
make sense out of it.

A simple tool which can fetch the usage metrics and feed it to say Statsd or
Prometheus, that can go a long way. Graphs can be generated and over a period of
time, we can figure out how frequently a collection is touched.

Another way of doing it is by storing all the information in the database itself
and generating graphs out of it. Unlike Statsd or Prometheus, we don't need any
realtime data to make sense out of this information
