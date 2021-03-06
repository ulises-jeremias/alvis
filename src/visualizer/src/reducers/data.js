import {
  TRANSPOSE_DATA,
  HEADER_NAME_UPDATE,

  SET_STATE,
} from 'infovis/constants'
  
import initialState from 'infovis/states/data-state'
import { hydrate, sanitize } from 'infovis/helpers/data-processor'

/**
 * ## dataReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function dataReducer(state = initialState, action) {
  switch (true) {
    case RegExp('.*data.*-request').test(action.type):
    {
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    }

    case RegExp('.*data.*-success').test(action.type):
    {
      const { name, data } = action.payload

      return {
        ...state,
        isFetching: false,
        error: null,
        [name]: data,
      }
    }

    case RegExp('.*data.*-failure').test(action.type):
    {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        success: null,
      }
    }

    case TRANSPOSE_DATA === action.type:
    {
      const { dataset } = state

      return {
        ...state,
        dataset: sanitize(hydrate({
          ...dataset,
          rows: dataset.columns,
          columns: dataset.rows,
        }))
      }
    }

    case HEADER_NAME_UPDATE === action.type:
    {
      const { selectedHeader, headerName } = action.payload
      const { dataset } = state

      let updatedHeaders = Array.from(dataset.headers || [])

      updatedHeaders[selectedHeader] = headerName

      return {
        ...state,
        dataset: {
          ...dataset,
          headers: updatedHeaders,
        }
      }
    }

    case SET_STATE === action.type:
    {
      const {
        data
      } = JSON.parse(action.payload)

      return {
        ...state,
        ...data,
      }
    }


    default:
    {
      return state
    }
  }
}
