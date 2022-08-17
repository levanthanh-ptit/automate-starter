import { Before } from "@cucumber/cucumber";

/**
 * @description default state for every scenario
 */
const defaultState = {
  username: "",
  password: "",
  id: "",
  email: "",
  keyword: "",
};

/**
 * @description Init state for every scenario
 */
Before(function () {
  this.state = { ...defaultState };
});

/**
 * @returns {defaultState}
 */
export function getState(context) {
  return context.state;
}
