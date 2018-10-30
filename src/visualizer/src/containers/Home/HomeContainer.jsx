import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactJson from 'react-json-view'
import {
  Container,
  Tab,
} from 'semantic-ui-react'

import dataActions from 'infovis/actions/data-actions'
import ChartsOptions from 'infovis/components/Menu/ChartsOptions'
import StatsView from 'infovis/components/Stats/View'
import DatasetView from 'infovis/components/Dataset/View'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...dataActions
    }, dispatch),
  }
}

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleTransposeButtonClick = this.handleTransposeButtonClick.bind(this)
  }

  componentDidMount() {
    const {
      data: {
        dataset: {
          headers,
        }
      },
      actions: {
        getData,
      }
    } = this.props

    headers === null && getData()
  }

  handleTransposeButtonClick() {
    const {
      data: {
        dataset: {
          headers,
        }
      },
      actions: {
        transposeData,
      }
    } = this.props

    headers !== null && transposeData()
  }

  render() {
    const {
      trans,
      data: {
        dataset,
      }
    } = this.props

    return (
      <div style={{ height: '100%' }}>
        <Container fluid id='home-container'>
          <Tab
            menu={{ pointing: true, borderless: true, attached: false, tabular: false }} 
            panes={[
              {
                menuItem: trans('home:options.stats.title'),
                render: () => (
                  <Tab.Pane attached={false}>
                    <StatsView
                      dataset={dataset}
                      trans={(name, ...args) => trans(`home:${name}`, ...args)}
                    />
                  </Tab.Pane>
                )
              },
              {
                menuItem: trans('home:options.charts.title'),
                render: () => (
                  <Tab.Pane attached={false}>
                    <ChartsOptions
                      trans={(name, ...args) => trans(`home:${name}`, ...args)}
                      options={[
                        { chart: 'pie', icon: 'pie chart' },
                        { chart: 'bar', icon: 'bar chart', color: 'blue' }
                      ]} 
                    />
                  </Tab.Pane>
                )
              },
              {
                menuItem: trans('home:options.advancedCharts.title'),
                render: () => (
                  <Tab.Pane attached={false} />
                )
              },
              {
                menuItem: trans('home:options.dataset.title'),
                render: () => (
                  <Tab.Pane attached={false}>
                    <DatasetView
                      dataset={dataset}
                      onTransposeButtonClick={this.handleTransposeButtonClick}
                      trans={(name, ...args) => trans(`home:${name}`, ...args)}
                    />
                  </Tab.Pane>
                )
              },
              {
                menuItem: trans('home:options.json.title'),
                render: () => (
                  <Tab.Pane attached={false}>
                    <ReactJson 
                      name='dataset'
                      src={dataset} 
                    />
                  </Tab.Pane>
                )
              }
            ]} 
          />
        </Container> 
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
