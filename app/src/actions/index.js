// *******************************************************
// Action Constant Generators
// -------------------------------------------------------
// -------------------------------------------

// *******************************************
// Action Definition Imports
// -------------------------------------------
import * as APP from './app';
// --------------------------------

const createAsyncAction = (KEY) => {
    return {
        [KEY]: {
            START: `${KEY}_START`,
            SUCCESS: `${KEY}_SUCCESS`,
            ERROR: `${KEY}_ERROR`,
            KEY: KEY
        }
    }
}

const TYPES = {
    ...createAsyncAction("DEFAULT_ASYNC_ACTION"),
}

const ACTIONS = {
    TYPES,
    APP
}

export default ACTIONS;
