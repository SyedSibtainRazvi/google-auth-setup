Write a module `PasswordLock` that has the following behaviour:

```
# Set "foo" as the password
PasswordLock.init("foo")
=> :ok

# Try to unlock with a wrong password
PasswordLock.unlock("bar")
=> {:error, "wrong password"}

# Unlock with correct password
PasswordLock.unlock("foo")
=> :ok

# Try to reset password with a wrong password
PasswordLock.reset("baz", "bar")
=> {:error, "wrong password"}

# Reset password using current password
PasswordLock.reset("foo", "bar")
=> :ok

# Unlock using new password
PasswordLock.unlock("bar")
=> :ok
```

Also, write another module `PasswordLogger` which has the following behaviour:

```
# Initialize using a filename
PasswordLogger.init("/tmp/password_logs")
=> {:ok, pid}

# Given a PID of a PasswordLogger, writes a line to the log file
containing the text 'Incorrect password: "bar"'. This function
call is asynchronous (non blocking).
PasswordLogger.log_incorrect(pid, "bar")
=> :ok
```

Whenever a wrong password is used in `PasswordLock`, it logs the attempt using `PasswordLogger`.
Implement the above modules using GenServers, also write tests.
