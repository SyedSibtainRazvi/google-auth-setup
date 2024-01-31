# Variable Naming

Always avoid single letter variable names. 

```rb
# Don't 
r = RefreshTokenService.new
```
```rb
# Do 
refresh = RefreshTokenService.new
```
Note: Although you are not advised to use single letter variables, there is one place you are allowed to - for indices when looping over lists. It's usually `i` and then `j`. 

# Indentation

```rb
# Don't
slots = @recruiter
         .slots
         .between(params['start'], params['end'])
         .available
```

```rb
# Do
foo =
  if bar
    ...
  else
    ..
  end

foo =
  bar
  .baz
  .etc
```
# Specs - line spacing

For readability, tests are usually written in the following style:
```rb
it "description" do
  # Setup
  
  # Code that tests feature

  # Assertions
end
```
# Method return values
- Explicitly writing "true" / "false" at the end of methods to return a boolean is not required. 
- For things that save/update data, the return value of those activerecord methods can be used directly.
- Unless a return value is expected and is needed by the caller, nothing need to be explicitly returned. 