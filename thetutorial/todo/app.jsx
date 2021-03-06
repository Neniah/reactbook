var TaskList = React.createClass({

        render: function(){

            return (<ul>

                {this.props.items.map((task, taskIndex) =>

                    <div className="form-group text-center">
                    <input className="toggle"
                            aria-hidden="true"
                            type="checkbox" />

                        {task}
                            <button
                              className="glyphicon glyphicon-trash btn btn-danger"
                              aria-hidden="true"
                              onClick={this.props.deleteTask}
                              value={taskIndex} ></button>

                    </div>

                )}
            </ul>);
        }
     });

  var TaskApp = React.createClass({
        getInitialState: function(){
            return {
                 items: ['Laundry', 'Dishes', 'Vacuum'],
                 task: ''
            }
        },

        deleteTask: function(e) {
            var taskIndex = parseInt(e.target.value, 10);
            console.log('remove task: %d', taskIndex, this.state.items[taskIndex]);
            this.setState(state => {
                state.items.splice(taskIndex, 1);
                return {items: state.items};
            });
        },

        onChange: function(e) {
            this.setState({ task: e.target.value });
        },

        overflowAlert: function() {
            if ((50 - this.state.task.length) < 0) {
                var beforeOverflowText = this.state.task.substring(50 - 10, 50);
                var overflowText = this.state.task.substring(50);

                  return (
                    <div className="alert alert-warning">
                      <strong>Oops! Too Long:</strong>
                      &nbsp;...{beforeOverflowText}
                      <strong className="bg-danger">{overflowText}</strong>
                    </div>
                  );
            }
        },
        addTask:function (e){
            this.setState({
                items: this.state.items.concat([this.state.task]),

                task: ''
            })

            e.preventDefault();
        },

        render: function(){
            return(
                <div className="well clearfix">
                    <h1>To Do List: </h1>
                    <TaskList items={this.state.items} deleteTask={this.deleteTask} />

                    <form onSubmit={this.addTask}>
                        {this.overflowAlert()}
                        <input className="form-control form-group width" onChange={this.onChange} type="text" value={this.state.task}/>
                        <span>{50 - this.state.task.length}</span>
                        <button className="btn btn-primary pull-right form-group"
                                disabled={this.state.task.length === 0 || (50 - this.state.task.length) < 0}> Add Task </button>
                    </form>
                </div>
            );
        }
    });

    ReactDOM.render(<TaskApp />, document.getElementById('container'));
