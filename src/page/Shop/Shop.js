/**
 * @author v4 <lucky6616888@163.com>
 */
import React, { Component } from 'react';

class Shop extends Component {
  render() {
    return (
      <div className="shop-wrap">
        商品首页
        {this.props.children}
      </div>
    );
  }
}

export default Shop;
