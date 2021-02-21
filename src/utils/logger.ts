/* eslint-disable no-console */

export function error(msg) {
  if (process.env.NODE_ENV !== "production") {
    console.error(msg);
  }
}

export function warn(msg) {
  if (process.env.NODE_ENV !== "production") {
    console.warn(msg);
  }
}

export function info(msg) {
  if (process.env.NODE_ENV !== "production") {
    console.info(msg);
  }
}

export default {
  warn,
  info,
  error
};
