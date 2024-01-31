## General 
* App should load the same state once the page is refreshed
* Search/Filter/Pagination etc should be kept on url.
* UI should handle the following state
  * Empty state (show empty message)
  * Loading state (show loading indicator)
  * Success state (show data)
  * Error state (show error message)
* App should not break because of analytics/trackers are not available
  > Add guarding condition when using analytics/tracking.
* Use `react` compatible libraries only.
* Zero `jQuery`.
* install dependencies via **npm** only

## React Components

* use meaningful props
* pass minimum number of data props
* Do not use `global` variables directly in the component
* use `defaultProps` for array/boolean type.
* use enums like `LOADING`, `SUCCESS`, `ERROR` as states instead of boolean/number
* For basic react ui components like `Input` always keep ability to accept any number of prop for flexibility.
  > const Input = ({ placeholder, onChange, ...otherProps}) => <input placeholder={placeholder} onChange={onChange} {...otherProps} />
* use standard prop name like `disabled`, `readOnly` unless there is conflict.
* Avoid unnecessary `arrow (=>)` functions
  > `<Input onChange={(e) => handleChange(e)} />` instead use `<Input onChange={handleChange} />`
