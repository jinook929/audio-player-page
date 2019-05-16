class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick = () => {
    console.log(this.timerID);
    this.setState({date: new Date()});
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'));