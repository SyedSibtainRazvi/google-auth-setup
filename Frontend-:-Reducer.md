### Reducer

1. [Initial state](#always-define-the-initial-state)
2. [Named reducer function](#always-name-the-reducer-function-avoid-exporting-anonymous-function)
3. [Spread Operator](#use-spread-operator-to-return-a-new-state-object)
4. [Never mutate](#always-return-a-new-state-object-never-mutate)
5. [Store data not UI state](#store-data-in-reducer-not-ui-state)
6. [KISS](#keep-the-state-simple-and-stupid-with-primitive-data-types)
7. [Reset state object on `componentWillUnmount`](#reset-state-object-on-componentwillunmount)
8. [Handlers](#use-handlers-for-complex-state-manipulation)
9. [Selectors](#selectors)
10. [Code structure](#structuring-the-reducer-file)
11. [Actions](#actions)

#### Always define the initial state

```js
// Good
const initialState = {
  user: {
    name: '',
    age: 0,
    job: {
      description: '',
    },
  },
};

const UserReducer(state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

export default UserReducer;

// Bad
const UserReducer(state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

export default UserReducer;

```

#### Always name the reducer function. Avoid exporting anonymous function

- Anonymous functions are difficult to debug.
- Finding named functions in editor is easier.
- Keep the reducer function name and the key in the combine reducer as same.

```js
// Good
const UserReducer(state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

export default UserReducer;

// Bad
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

```

#### Use spread operator to return a new state object

```js
// Good
const UserReducer(state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

// Bad
const UserReducer(state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, { user: action.data });
    default:
      return state;
  }
};

```

#### Always return a new state object. Never mutate

```js
// Good
const UserReducer(state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

// Bad
const UserReducer(state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      const newObj = state;
      // This directly mutate the reference, which is a original state object.
      newObj.user = action.data;
      return newObj;
    default:
      return state;
  }
};

```

#### Keep the state simple and stupid with primitive data types
```js
// Good
const initialState = {
  user: {
    name: '',
    age: 0,
    isFullTimer: true,
    job: {
      description: '',
      previousRoles: ['SE-1', 'SE-2'],
    },
  },
};

// Bad
const initialState = {
  user: {
    name: '',
    age: 0,
    // Array can be transformed to Set before consuming in
    // components if required but keep the state simple.
    isFullTimer: new Set(),
    job: new Map(),
  },
};
```

#### Reset state object on `componentWillUnmount`

```js
// userActionCreator.js
export const resetUserData = () => ({
  type: RESET_USER_DATA,
});

// userReducer.js
const UserReducer(state = initialState, action) => {
  switch (action.type) {
    case RESET_USER_DATA:
      return initialState;
    case GET_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

// user dashboard page component
import { resetUserData } from 'userActionCreator';

class UserDashboard extends Component {
  componentWillUnmount() {
      this.props.resetUserData();
  }
  ...
}
export default connect(mapStateToProps, {
  resetUserData,
})(UserDashboard);
```


#### Use handlers for complex state manipulation

- Keep the logic to normailze the data outside the reducer function in a separate handler
- Handler can to exported for unit testing

```js
// Bad
const UserReducer(state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        fullName: action.data.firstName && action.data.lastName ? `${action.data.firstName} ${action.data.lastName}` : '',
      };
    default:
      return state;
  }
};

// Good
// use named exports for handlers for unit testing.
export const setUserFullName = (state, action) => {
  const { firstName, lastName } = action.data;
  if(firstName && lastName) {
    return `${firstName} ${lastName}`
  }
  return '';
};

const UserReducer(state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        fullName: setUserFullName(state, action),
      };
    default:
      return state;
  }
};
```

#### Selectors

- Use selectors for querying the state and decouple the state from the component.
- If there is a change in data the component doesn't need to be aware of it. Selectors will be the only place where we need to update.
- In the below example getting the `fullName` logic remains the same across all components.
- Keep the selectors local to a reducer file.
- If the selectors subscribes to different reducer then keep it in common selector file under reducer directory
- Export selectors for unit testing

```js
// Bad

// Component
const mapStateToProps = state => ({
  fullName: state.user.firstName + state.user.lastName,
  isAuthRequired: state.settings.username && state.settings.apiFailed,
});

export default connect(mapStateToProps, {})(UserDashboard);

// Good

// user reducer
export const getFullName = state => state.user.firstName + state.user.lastName;

// settings reducer
export const getAuthStatus = state => {
  return state.settings.username && state.settings.apiFailed;
};

// Component
import { getFullName } from 'userReducer';
import { getAuthStatus } from 'settingsReducer';

const mapStateToProps = state => ({
  fullName: getFullName(state),
  isAuthRequired: getAuthStatus(state),
});

export default connect(mapStateToProps, {})(UserDashboard);

```

#### Structuring the reducer file

- Write single reducer function per file and export it as default.
- Use named functions for the handlers and selectors.
- Handlers should stay in the top of the reducer file.
- Selectors should stay in the bottom of the reducer file.

```js
// Good
// userReducer.js

import { SET_USER_NAME } from './actions';

// handlers
export const setUserFullName = (state, action) => {
  const { firstName, lastName } = action.data;
  if(firstName && lastName) {
    return `${firstName} ${lastName}`
  }
  return '';
};

// reducer function
const UserReducer(state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        fullName: setUserFullName(state, action),
      };
    default:
      return state;
  }
};

// default export for reducer function
export default UserReducer;

// Selectors
export const getFullName = state => state.user.firstName + state.user.lastName;

```

#### Actions

- Use es6 arrow function for actions
- Use meta key to send additional information
- Use constants for action type
- Avoid a function block and return key, directly return the action object

```js
// Good
export const getUserInfoAction = () => ({
  type: GET_USER_INFO,
});

export const postUserInfoAction = data => ({
  type: POST_USER_INFO,
  data,
  meta: {
    tag: 'BIZ_LIGHT',
  },
});

// Bad
export function getUserInfoAction() {
  return {
    type: GET_USER_INFO,
  };
};

export const getUserInfoAction = () => {
  return {
    type: GET_USER_INFO,
  };
);

export const postUserInfoAction = data => ({
  type: POST_USER_INFO,
  data,
  tag: 'BIZ_LIGHT',
});

```

#### Additional notes

- Use combine reducer to group inter related state object.
- Group reducer/state based on data modeling not based on UI.