export default function TabButton(props) {
  // props.children refers to anything between the component tags
  // for single values this makes sense e.g. a word or sentence
  // this is called 'Component Composition'

  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}
