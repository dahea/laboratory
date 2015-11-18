import {combineReducers} from "redux";
import {
  CHOOSE_ENDPOINT,
  CHANGE_PENDING_REQUEST_PROPS,
  SUBMIT_PENDING_REQUEST,
  START_REQUEST,
  FINISH_REQUEST,
} from "../actions/endpointExplorer";

const endpointExplorer = combineReducers({
  currentResource,
  currentEndpoint,
  pendingRequest: combineReducers({
    template: identity(""),
    props:    identity({}),
  }),
  currentRequest
});

export default endpointExplorer

function currentResource(state="", action) {
  switch (action.type) {
    case CHOOSE_ENDPOINT:
      return action.resource;
    default:
      return state;
  }
}

function currentEndpoint(state="", action) {
  switch (action.type) {
  case CHOOSE_ENDPOINT:
    return action.endpoint;
  default:
    return state;
  }
}

function identity(initial) {
  return (state=initial, action) => state;
}

function currentEndpoint(state="", action) {
  switch (action.type) {
  case CHOOSE_ENDPOINT:
    return action.endpoint;
  default:
    return state;
  }
}

function currentRequest(state={isLoading: false}, action) {
  switch (action.type) {
  case START_REQUEST:
    return Object.assign({}, state, {isLoading: true});
  case FINISH_REQUEST:
    let {error, payload} = action;
    
    return Object.assign({}, state, {isLoading: false, response: payload, error});
  default:
    return state;
  }
}
