export function LogRegForm({ children, submit, name, formStyle, formButtonStyle }) {
  return (
    <form className={formStyle} name={name} onSubmit={submit} noValidate>
        {children}
    </form>
  );
}