Bounded Mars Rover and arbitrary shaped plateaus
================================================

NASA has become more ambitious this time. We're going to land the rover
on arbitrary shaped plateaus.

NASA is going to analyse the plateau before landing the rover
and let the rover know what kind of shape it's going to be.
For now NASA can land the rover on 2 types of plateaus :

### When the plateau is circular
NASA gives the following string as the first line of input
"CIRCLE 5 4 3"
Where the center of the circle is (5,4) and radius is 3.

### When the plateau is square
NASA gives the following string as the first line of input
"SQUARE 3 4 5"
Where the bottom left vertex of the square is is (3,4) and
each side is of length 5

So now you'll need to modify your program such that
your rover can move on any plateau without you having to
open up and reprogram the rover each time a new shape is encountered.

The trick here is to organize the boundary check logic where it belongs
so that the Rover need not worry about it. By the way, here's how
you check if a point is outside a circle : 

```ruby
center_x = 5
center_y = 5
radius = 4

point_x = 10
point_y = 10


puts (point_x - center_x) ** 2 + (point_y - center_y) ** 2 > radius ** 2
# => true
```

Here's a sample input :

## Input

### Run 1
```
CIRCLE 5 5 2
6 5 N
MRMLMLMRMRRM
```

## Output

```
5 6 S
```

### Hint!
Go through the Factory Method pattern and see if that helps you organize your classes better.