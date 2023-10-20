export default function mainFieldset({ children, className, legend }) {
  return (
    <fieldset className={className}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
