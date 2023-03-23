import { EVENT } from "../action-types";

// SAVE
export const saveEvent = (params) => ({
  type: EVENT.SAVE,
  params,
});

export const saveEventSucceeded = () => ({
  type: EVENT.SAVE_SUCCEEDED,
});

export const saveEventFailed = () => ({
  type: EVENT.SAVE_FAILED,
});

// LOAD
export const loadEvent = (params) => ({
  type: EVENT.LOAD,
  params,
});

export const loadEventSucceeded = () => ({
  type: EVENT.LOAD_SUCCEEDED,
});

export const loadEventFailed = () => ({
  type: EVENT.LOAD_FAILED,
});

// UPDATE
export const updateEvent = (params) => ({
  type: EVENT.UPDATE,
  params,
});

export const updateEventSucceeded = () => ({
  type: EVENT.UPDATE_SUCCEEDED,
});

export const updateEventFailed = () => ({
  type: EVENT.UPDATE_FAILED,
});
