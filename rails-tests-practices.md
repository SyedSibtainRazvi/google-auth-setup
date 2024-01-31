Some of the guidelines:

- Try to write many model/form/service specs as possible
- Use factory girl for creating models (well debatable)
- If a test can work on objects without persisting objects, then use stubbed objects. Factory girl has `build_stubbed` which returns object which is not persisted.
- Use capybara headless driver for feature specs
- Write feature specs only for happy paths
- Write fewer feature specs which JS if possible. They tend to be very slow, and can slow down test suite as a whole.
- If there are lots of feature specs, try using [session access gem](https://github.com/railsware/rack_session_access/) to speed up trivial signup process.
- Do not use mocks in feature specs. Feature specs should try to mimick how end users use the system as much as possible.
