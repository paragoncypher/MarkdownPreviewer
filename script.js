function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const defaultMarkdown = `# This is a heading

## This is a sub-heading
<br>

### These are list items

- item 1
- item 2
- item 3

<br>

\`This is inline code\`
\`\`\`const codeBlock = "This is a codeblock";
\`\`\`
<br>

> “This is a blockquote”
<br><br>

***Markdown Previewer*** by [paragoncypher](https://github.com/paragoncypher)
<br>

![paragoncypher logo](https://paragoncypher.github.io/images/mgirl.jpg)
`;

marked.setOptions({
  breaks: true });


marked.setOptions({
  breaks: true });


class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: defaultMarkdown });_defineProperty(this, "onChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "App" }, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        value: this.state.text,
        onChange: this.onChange,
        placeholder: "Enter Your Markdown Here..." }), /*#__PURE__*/
      React.createElement("div", {
        id: "preview",
        dangerouslySetInnerHTML: { __html: marked(this.state.text) } })));



  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));