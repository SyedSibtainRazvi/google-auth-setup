Before touch screens became popular, mobile phones users used to type letters using their number keys. Each number would have letters printed on the keys and using something called the "T9" dictionary, the users would type words.

Here's the layout of the keypad :

![image](https://user-images.githubusercontent.com/1707078/38416282-de2985ac-39b1-11e8-8135-3f1b59cc9c50.png)

So to print "DOG", the user would have to type "364" and the phone would guess the word from a dictionary and print the right word. If the user wants to print

"FOG" instead, the user will press the same keys and then keep pressing a "cycle" button on the screen until "FOG" appears on the screen.

Here are some more examples:

|Word printed|Numbers typed|
|------------|-------------|
|MONEY       |66639        |
|PATH        |7284         |

In our version of the app, we also print a suggestions list having the top 3 results sorted alphabetically after each key press, so the user can press the down key and select the right word if it is in the suggestions list.

For example, to get the word "ADJACENT", the user types 235 (for ADJ) which prints the word "BEL" on the screen because it's a word in the dictionary, but also shows a list with the following words:

* ADJACENCY
* ADJACENT
* ADJACENTLY

Now the user presses the down arrow twice to select "ADJACENT" from the list. This took us a total of 5 key presses.

Note: If 235 doesn't have any matching three lettered words in the dictionary, it would just print "ADJ" on the screen, and also the same suggestion list that we saw above with the same three words.

Your task is to write a function that accepts a word and a dictionary as parameters which returns the minimum number of key presses (including number keys, down key and the cycle key) required to print that word on the screen.

The input files are of the following format:

```
<Word to print>
<Number of words in the dictionary>
<word 1 in dict>
<word 2 in dict...>
```

Some sample files are provided and their expected outputs are as below:

```
Sample1.txt - 5
Sample2.txt - 7
Sample3.txt - 4
```
