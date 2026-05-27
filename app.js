/**\
 * <div>
 *  <div id="child">
 *      <h1>I am a tag  </h1>
 *  </div>
 * </div>
 */
/**\
 * <div>
 *  <div id="child">
 *      <h1>I am a tag  </h1>
 *      <h2>I am a tag2  </h2>
 *  </div>
 * </div>
 */
/**\
 * <div>
 *  <div id="child">
 *      <h1>I am a tag  </h1>
 *      <h2>I am a tag2  </h2>
 *  </div>
 * <div id="child">
 *      <h1>I am a tag  </h1>
 *      <h2>I am a tag2  </h2>
 *  </div>
 * </div>
 */

const parent = React.createElement("div", {id:"parent"},
    [
        React.createElement("div", {id:"child"},
       [ React.createElement("h1", {id:"heading"},"I am  a h1 tag" )
        , React.createElement("h2", {id:"heading"},"I am  a tag2" )
       ]),
       React.createElement("div", {id:"child2"},
       [ React.createElement("h1", {id:"heading"},"I am  a h1 tag" )
        , React.createElement("h2", {id:"heading"},"I am  a tag2" )
       ])
    ])

// const heading = React.createElement("h1",{id:"heading"},"Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

