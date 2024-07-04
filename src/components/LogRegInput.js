export function LogRegInput({name, type, inputTitleStyle, inputStyle, value, onChange, placeholder, minLength }){
  return(
    <>
      <h3 className={inputTitleStyle}>
        {name}
      </h3>
      <input
        name={name}
        type={type}
        className={inputStyle}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        minLength={minLength}
        required
      />
    </>
  )
}