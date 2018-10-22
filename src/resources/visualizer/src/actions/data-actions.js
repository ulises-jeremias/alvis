import {
  actionRequest,
  actionSuccess,
  actionFailure
} from 'infovis/helpers/action-dispatcher'

import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
} from 'infovis/constants/data.constants'

import browser from 'webextension-polyfill'

export function getData() {
  return dispatch => {
    dispatch(actionRequest(GET_DATA_REQUEST))
    return browser.runtime.sendMessage({ call: 'notifyDocumentLoaded' })
      .then(dataset => {
        console.table(dataset);

        if (dataset && dataset.currentDataset) {
          dispatch(actionSuccess(GET_DATA_SUCCESS, 'dataset', dataset.currentDataset))
          return null
        }
        
        throw new Error('No dataset provided');
      })
      .catch(err => {
        dispatch(actionFailure(GET_DATA_FAILURE, err))
      })
  }
}

export default {
  getData,
}
