
class IndecisionApp extends React.Component {
    render() {
      const title = 'Indecision'
      const subtitle = 'Put your life in the hands of a computer'
      const options = ['One', 'Two', 'Three']
  
      return <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    }
  }
  
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      )
    }
  }
  
  class Action extends React.Component {
    handlePick() {
      alert('Handle Pick trigerred')
    }
    render() {
      return <div>
        <button onClick={this.handlePick}>What do you want to do ?</button>
      </div>
    }
  }
  
  class Options extends React.Component {
    constructor(props) {
      super(props)
      this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
      // alert('Remove all options')
      console.log(this.props.options)
    }
    render() {
      return (<div>
        {this.props.options.map((option) => <Option key={option} optionText={option} />)}
        <button onClick={this.handleRemoveAll}>Remove All</button>
      </div>)
    }
  }
  
  class Option extends React.Component {
    render() {
      return (<div>
        {this.props.optionText}
      </div>)
    }
  }
  
  class AddOption extends React.Component {
    handleAddOption(e) {
      e.preventDefault()
  
      const option = e.target.elements.option.value.trim()
  
      if (option) {
        alert(option)
      }
    }
    render() {
      return <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    }
  }
  
  class VisibilityToggle extends React.Component {
    constructor(props) {
      super(props)
      this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this)
      this.state = {
        visibility: false
      }
    }
    handleVisibilityToggle() {
      this.setState((prevState) => {
        // const newValue = !!!prevState
        return {
          visibility: !prevState.visibility
        }
      })
      console.log(this.state.visibility)
    }
    render() {
      return (
        <div>
          <p>State is {this.state.visibility ?'Active': 'currently false'}</p>
          <button onClick={this.handleVisibilityToggle}>
            {this.state.visibility ? 'Hide details' : 'Show details'}</button>
        </div>
      )
    }
  }
  