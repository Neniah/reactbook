var Task = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return ({
      done: false
    });
  },

  render: function() {
    return (
      <li>
        <input type="checkbox" checked={this.props.done} />
        {this.props.name}
      </li>
    );
  }
});

var Image = React.createClass({
  render: function(){
    return (
      <img {...this.props}/>
    );
  }
});

var ToDo = React.createClass({
  componentDidMount: function(){
    console.log(this.refs.one.getDOMNode());
  },
  render: function() {
    return (
      <ul>
        <Task ref='one' name="Introduction" done='true' />
        <Task name='Chapter 1 - First Component' done='true' />
        <Task name='Chapter 2 - Properties'  />
        <Task name='El cuatro de abordo'/>
        <Image />
      </ul>

    );
  }
});

ReactDOM.render(<ToDo />, document.getElementById('example'));