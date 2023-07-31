import style from "./Field.module.scss";

export function Field({
  label,
  name,
  value,
  required,
  type = "text",
  placeholder,
  onChange
}) {
  return (
    <div className={style.field}>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id={name}
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
