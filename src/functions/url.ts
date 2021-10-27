/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/**
 *
 */
export function currentUrl() {
  return '';
}

/**
 *
 */
export function urlPath(url?: string): string {
  if (url || typeof window !== 'undefined') {
    const parsedUrl = new URL(url || window.location.href);
    return parsedUrl.pathname;
  }

  return '';
}

/**
 *
 */
// function parse_querystring() {

// }

// /**
//  *
//  */
// function is_same_hostname() {

// }

// /**
//  *
//  */
// function get_root_domain() {

// }

// /**
//  *
//  */
// function is_same_root_domain() {

// }
