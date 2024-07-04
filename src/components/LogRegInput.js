export function LogRegInput({name, type, inputTitleStyle, inputStyle, value, onChange, placeholder, minLength }){
  console.log(name);
  return(
    <>
      <h3 className={inputTitleStyle}>
        {name}
      </h3>
      <input
        type={type}
        className={inputStyle}
        value={value || ""}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        minLength={minLength}
        required
      />
    </>
  )
}