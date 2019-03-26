import React, { Component } from 'react'

import styles from './banner.module.less'

import bannerImg from '@assets/img/travel-youtube-banner.jpg'
export class Banner extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className={styles.banner}>
        <img src={bannerImg} alt='广告位' />
      </div>
    )
  }
}

export default Banner
