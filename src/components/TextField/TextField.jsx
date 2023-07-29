import style from "./TextField.module.scss";

export function TextField({
  label,
  name,
  value,
  required,
  type,
  placeholder,
  onChange
}) {
  return (
    <div className={style.campo_texto}>
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
