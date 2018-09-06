import React from 'react';
import PropTypes from 'prop-types';

class ScrollBar extends React.Component {
  render() {
    const {width, height} = this.props;
    return (
      <div className="scrollbar"
           style={{
             border: 'solid 1px lightgray',
             height,
             backgroundColor: "#f90c00"
           }}
      >
        <div
          className="scrollbar"
          id="hoge" style={{
          width: `${width}%`,
          height,
          backgroundColor: "#05409a"
        }}/>
      </div>
    );
  }
}

ScrollBar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

ScrollBar.defaultProps = {
  height: 10,
  width: 0
};

class ManageScrollBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
      scrollBarRate: 0
    };
    this.ScrollRateCalculation = this.ScrollRateCalculation.bind(this);
  }

  ScrollRateCalculation() {
    let innerHeight = window.innerHeight;
    let bodyElement = document.getElementById('___gatsby');
    let rect = bodyElement.getBoundingClientRect();
    let heightIsHtml = rect.height;
    let scrollMax = Math.ceil(heightIsHtml - innerHeight);
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollRate = parseInt((scrollY / scrollMax) * 100, 10);
    this.setState({
      scrollY: scrollY,
      scrollBarRate: scrollRate
    });
  }

  componentDidMount() {
    this.ScrollRateCalculation();

    document.addEventListener('scroll', this.ScrollRateCalculation);
    window.addEventListener('hashchange', this.ScrollRateCalculation);
    document.addEventListener('click', this.ScrollRateCalculation);
  }

  render() {
    return (
      <div>
        <ScrollBar className="scrollbar" height={7} width={this.state.scrollBarRate}/>
      </div>
    )
  }
}

export default ManageScrollBar;