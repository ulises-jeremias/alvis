import browser from 'webextension-polyfill'
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,

  TRANSPOSE_DATA,
  HEADER_NAME_UPDATE,
} from 'infovis/constants/data.constants'
import {
  hydrate,
  sanitize,
  mapRowsToColumns
} from 'infovis/helpers/data-processor'
import {
  actionRequest,
  actionSuccess,
  actionFailure
} from 'infovis/helpers/action-dispatcher'

export function headerNameUpdate(selectedHeader, headerName) {
  return dispatch => Promise.resolve([])
    .then(() => {
      dispatch({
        type: HEADER_NAME_UPDATE,
        payload: {
          selectedHeader,
          headerName,
        }
      })
      return
    })
    .catch(console.err)
}

export function transposeData() {
  return dispatch => Promise.resolve([])
    .then(() => {
      dispatch({ type: TRANSPOSE_DATA })
      return
    })
    .catch(console.err)
}

export function getData() {
  return dispatch => {
    dispatch(actionRequest(GET_DATA_REQUEST))
    return browser.runtime.sendMessage({ call: 'notifyDocumentLoaded' })
      .then(dataset => {
        if (dataset && dataset.currentDataset) {
          let data = sanitize(hydrate(mapRowsToColumns(dataset.currentDataset)))
          return dispatch(actionSuccess(GET_DATA_SUCCESS, 'dataset', data))
        }
        
        throw new Error('No dataset provided')
      })
      .catch(err => {
        dispatch(actionFailure(GET_DATA_FAILURE, err))
      })
  }
}

export default {
  getData,
  transposeData,
  headerNameUpdate,
}
