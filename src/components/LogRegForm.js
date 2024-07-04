export function LogRegForm({ children, submit, name, formStyle, formButtonStyle, submitButtonText }) {
  return (
    <form className={formStyle} name={name} onSubmit={submit} noValidate>
      <div className="input__container">
        {children}
      </div>
      <button type="submit" className={formButtonStyle} >
        {submitButtonText}
      </button>
    </form>
  );
}