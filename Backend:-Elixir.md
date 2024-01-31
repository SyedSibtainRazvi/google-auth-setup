# Think functional
> Elixir is a functional language. Please don't code in OOP style. Everything's immutable, embrace it!


## 1. Use pipes when there's more than one function calls on same data

**Do:**
```elixir
result = 
    some_var
    |> parse()
    |> combine()
    |> call_api()
    |> handle_response()

# if its a single function call
result = parse(some_var)
```
**Don't:**

```elixir
# avoid pipe if its just a single function call
result = some_var |> parse()

some_var = parse(some_var)
some_var = combine(some_var)
some_var = call_api(some_var)
result = handle_response(some_var)
```

## 2. Prefer function pattern matching over lengthy cond blocks  

**Do:**
```elixir
def parse("prefix-abc-" <> _content) do
    # ... we process the content based on abc logic neatly
    {:ok, :abc, true}
end

def parse("prefix-def-" <> content) do
    # ... we process the content based on def logic neatly
    {:ok, :def, true}
end

def parse(_content) do
    # ... we can neatly ignore the default
    {:ok, :default, false}
end
```

**Don't:**
```elixir
def parse(string) do
    cond do
        String.starts_with?(string, "prefix-abc-") -> 
            # ... we process the content based on abc logic neatly
            {:abc, true}
        String.starts_with?(string, "prefix-def-") -> 
            # ... we process the content based on abc logic neatly
            {:def, true}
        true ->
            # ... default case
            false
    end
end
```

## 3. Code documentation:
Elixir treats documentation as a first-class citizen! The points below are based on [ex_doc](https://hexdocs.pm/ex_doc/readme.html)
* Spend time to document the important parts of the code. At least once the project concludes.
* Set `@moduledoc false` for modules that doesn't serve any purpose to the user. Prevent the documentation from becoming convoluted. When building documentation, by default all modules are listed in API Module reference. [Read more here.](https://hexdocs.pm/elixir/writing-documentation.html#hiding-internal-modules-and-functions) 
* Use private functions [defined using `defp`] functions for processing within a module. When building documentation, the public functions get listed in the API Module reference. Having too many functions in there can be quite confusing and would defeat the purpose of having a documentation
Read more about best practices on documentation [here](https://hexdocs.pm/elixir/writing-documentation.html#recommendations)

## 4. Use a basic code formatting or linting
[Elixir mix](https://hexdocs.pm/mix/master/Mix.Tasks.Format.html) has a task that can easily format your code on save. Just use `mix format`. Add it to pre-commit hook or to your fav code editor's on_save hook.  
If you want to up the game and want to enforce stricter coding conventions in a team, consider [Credo](https://github.com/rrrene/credo). But please do consider discussing with team before adding such stricter tools!

## 5. Do you need background processing libraries?
Elixir comes with OTP libraries like GenServer and Supervisor using which we can build background job processors.  
While you may pick Sidekiq by default when writing apps in Ruby, in Elixir there are OTP options provided by the language and platform. Make sure to get familiar with OTP and see if that is enough for your needs. Redis backed queuing libraries do add additional infrastructure complexity and also overhead due to data serialization, so make sure to evaluate whether it is an actual need or not.  
For example:
1. Make use of [Agent](https://hexdocs.pm/elixir/Agent.html) for refreshing access tokens
2. Make use of [GenServer](https://hexdocs.pm/elixir/GenServer.html) for async tasks with retry on failure

Note: If you need externally back backed background jobs, that would necessitate the use of a library like Exq. For example in cases
where the deployment environment runs your application from a Kubernetes pod and new deployments would wipe the memory associated
with the older version. 
