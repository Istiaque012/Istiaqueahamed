"use client";

import type { ChangeEventHandler } from "react";

export function FilterButton({
  children,
  onClick,
  pressed,
}: {
  children: string;
  onClick?: () => void;
  pressed: boolean;
}) {
  return (
    <button className="ui-filter" type="button" aria-pressed={pressed} onClick={onClick}>
      {children}
    </button>
  );
}

type FormFieldProps = {
  autoComplete?: string;
  disabled?: boolean;
  error?: string;
  hint?: string;
  label: string;
  maxLength?: number;
  minLength?: number;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  spellCheck?: boolean;
  type?: "email" | "text" | "url";
  value?: string;
};

export function FormField({
  autoComplete,
  disabled,
  error,
  hint,
  label,
  maxLength,
  minLength,
  name,
  onChange,
  placeholder,
  required,
  rows,
  spellCheck,
  type = "text",
  value,
}: FormFieldProps) {
  const describedBy = error ? `${name}-error` : hint ? `${name}-hint` : undefined;
  const shared = {
    "aria-describedby": describedBy,
    "aria-invalid": Boolean(error),
    id: name,
    disabled,
    maxLength,
    minLength,
    name,
    onChange,
    placeholder,
    required,
    spellCheck,
    value,
  };

  return (
    <div className="ui-field">
      <label htmlFor={name}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {rows ? <textarea {...shared} rows={rows} /> : <input {...shared} autoComplete={autoComplete} type={type} />}
      {error ? (
        <p className="ui-field__error" id={`${name}-error`}>
          {error}
        </p>
      ) : hint ? (
        <p className="ui-field__hint" id={`${name}-hint`}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}
