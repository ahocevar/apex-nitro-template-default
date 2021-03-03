import { createMap } from "../lib/map";

/**
 * @function init
 * @example
 * init();
 **/
const init = () => {
  /*
   * The line below requires that the APEX page has a HTML element with the id
   * 'map'. To create such an element on page 1, add a "Static Content"
   * region. In the field "Source", add the following code:
   * ```html
   * <div id="map"></div>
   * ```
   */
  createMap();
};

export default {
  init
};
