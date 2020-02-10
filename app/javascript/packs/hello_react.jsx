// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import '@shopify/polaris/styles.css';
import Appli from '../components/appli'
import {AppProvider} from '@shopify/polaris'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(

    <AppProvider>
      <Hello name="Thomas" />,
      <Appli />
    </AppProvider>,
    document.body.appendChild(document.createElement('div')),
  )
})
