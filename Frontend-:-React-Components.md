### React Components

1. [Use stateless functions](#use-stateless-functions)
2. [Use `PureComponent`](#use-purecomponent)
3. [Avoid manual `.bind` ](#avoid-manual-bind)
4. [Don't use inline methods ](#dont-use-inline-methods)
5. [Use `mapDispatchToProps`](#use-mapdispatchtoprops)
6. [Use SubComponents instead of multiple renders](#use-subcomponents-instead-of-multiple-renders)
7. [Should Specify `defaultProps`](#should-specify-defaultprops)
8. [Should Specify `flow Types`](#should-specify-flow-types)
9. [Use redux for data](#use-redux-for-data)
10. [pass a function to `setState`, to update state based on currentState](#pass-a-function-to-setstate-to-update-state-based-on-currentstate)


#### Use stateless functions

```js
// Good
const HelloName = (props) => {
  return (
    <div>Hello {props.name}</div>
  );
}

// Bad
class HelloName extends Component {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}

// Bad
class HelloName extends PureComponent {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}
```

#### Use `PureComponent`

```js
// Good
class HelloName extends PureComponent {
  componentDidMount() {
    this.props.fetchData(this.props.id);
  }
  render() {
    return (
      <AnotherPureComponent data={this.props.data} />
    );
  }
}

// Bad
class HelloName extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.id);
  }
  render() {
    return (
      <AnotherPureComponent data={this.props.data} />
    );
  }
}
```

#### Avoid manual `.bind`

```jsx
// Good 
class HelloName extends PureComponent { 
  handleChange = (e) => { 
    this.props.updateField(e.target); 
  } 
  render() { 
    return ( 
      <div> 
        <form> 
          <input name="name" onChange={this.handleChange} /> 
          <button type="submit" /> </form> </div> 
    ); 
  } 
} 

// Bad 
class HelloName extends PureComponent { 
  handleChange(e) { 
    this.props.updateField(e.target); 
  } 
  render() { 
    return ( 
      <div> 
        <form> 
          <input name="name" onChange={this.handleChange.bind(this)} /> 
          <button type="submit" /> 
        </form> 
     </div> 
   ); 
  } 
} 

// Bad 
class HelloName extends PureComponent { 
  handleChange(e) { 
    this.props.updateField(e.target); 
  } 
  render() { 
    return ( 
      <div> 
        <form> 
          <input name="name" onChange={(e) => this.handleChange(e)} /> 
          <button type="submit" /> 
        </form> 
      </div> 
    ); 
  } 
}
```

#### Don't use inline methods

```jsx
// Good
class HelloName extends PureComponent {
  handleChange = (e) => {
    this.props.updateField(e.target);
  }

  render() {
    return (
      <div>
        <form>
          <input name="name" onChange={this.handleChange} />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

// Bad
class HelloName extends PureComponent {
  render() {
    return (
      <div>
        <form>
          <input name="name" onChange={(e) => this.props.updateField(e.target)} />
          <button type="submit" />
        </form>
      </div>
    );
  }
}
```


#### Use `mapDispatchToProps`


```jsx

// Good
import { updateField } from './actions';

class HelloName extends PureComponent {
  handleChange = (e) => {
    this.props.updateField(e.target);
  }

  render() {
    return (
      <div>
        <form>
          <input name="name" onChange={this.handleChange} />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

export default connect({}, { updateField })(HelloName);

// Bad
class HelloName extends PureComponent {
  handleChange(e) {
    this.props.dispatch(this.props.updateField(e.target));
  }

  render() {
    return (
      <div>
        <form>
          <input name="name" onChange={this.handleChange.bind(this)} />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

export default connect()(HelloName);
```

#### Use SubComponents instead of multiple renders

```js
// Good
const AnotherComponent = () => {
  return (<div>AnotherComponent</div>);
}

class HelloName extends PureComponent {
  componentDidMount() {
    this.props.fetchData(this.props.id);
  }
  render() {
    return (
      <div>
        <AnotherComponent />
      </div>
    );
  }
}

// Bad
class HelloName extends PureComponent {
  componentDidMount() {
    this.props.fetchData(this.props.id);
  }
  
  renderAnother() {
    return <div>AnotherComponent</div>;
  }

  render() {
    return (
      <div>
        {this.renderAnother()}
      </div>
    );
  }
}
```

#### Should Specify `defaultProps`

```jsx
// Good
const HelloName = ({ haveSecondChild }) => {
  return (
    <div>
      <FirstChild />
      {haveSecondChild && <SecondChild />}
    </div>
  )
};

HelloName.defaultProps = {
  haveSecondChild: false,
};

// Bad
const HelloName = ({ haveSecondChild }) => {
  return (
    <div>
      <FirstChild />
      {haveSecondChild && <SecondChild />}
    </div>
  )
};

// Bad
const HelloName = ({ haveSecondChild = false }) => {
  return (
    <div>
      <FirstChild />
      {haveSecondChild && <SecondChild />}
    </div>
  )
};
```

#### Should Specify `flow Types`

```jsx

type Props = {
  haveSecondChild: boolean
}
// Good
const HelloName = ({ haveSecondChild }: Props) => {
  return (
    <div>
      <FirstChild />
      {haveSecondChild && <SecondChild />}
    </div>
  )
};

// Bad
const HelloName = ({ haveSecondChild }) => {
  return (
    <div>
      <FirstChild />
      {haveSecondChild && <SecondChild />}
    </div>
  )
};
```

#### Use redux for data

```jsx
// Good
class TestComponent extends PureComponent {
  handleChange(e) {
    this.props.updateField(e.target);
  }

  handleSubmit() {
    this.props.saveData();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" onChange={this.handleChange} />
          <button type="submit" />
        </form>
      </div>
    )
  }
};

// Bad
class TestComponent extends PureComponent {
  constructor() {
    super();
    
    this.state = {
      fields: {};
    }
  }

  handleChange(e) {
    const fields = Object.assign({}, this.state.fields};
    fields[e.target.name] = e.target.value;

    this.setState({
      fields,
    });
  }

  handleSubmit() {
    this.props.saveData(this.state.fields);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" onChange={this.handleChange} />
          <button type="submit" />
        </form>
      </div>
    )
  }
};
```

#### pass a function to `setState`, to update state based on currentState

```jsx
// Good
class TestComponent extends PureComponent {
  constructor() {
    super();
    
    this.state = {
      loading: false;
    }
  }

  toggleLoading() {
    this.setState((prevState) => {
      loading: !prevState.loading
    });
  }

  // render method
};

// Bad
class TestComponent extends PureComponent {
  // constructor

  toggleLoading() {
    this.setState({
      loading: !this.state.loading
    });
  }

  // render method
};
```