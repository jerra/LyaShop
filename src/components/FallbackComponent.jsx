export default function FallbackComponent(props) {
  return (<div role="alert">
    <p>An error has occurred:</p>
    <pre>{props.error.message}</pre>
  </div>);
}