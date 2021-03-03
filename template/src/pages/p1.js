import { createMap } from "../lib/map";

/**
 * @function init
 * @example
 * init();
 **/
const init = () => {
  /*
   * The line below assumes that the APEX page has a HTML element with the id
   * 'map'. To create such an element on page 1, add a "Static Content"
   * element. In the field "Source", add the following code:
   * ```html
   * <div id="map"></div>
   * ```
   */
  createMap('map');
};

export default {
  init
};
