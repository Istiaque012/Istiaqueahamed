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
  error?: string;
  hint?: string;
  label: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  type?: "email" | "text" | "url";
  value?: string;
};

export function FormField({
  autoComplete,
  error,
  hint,
  label,
  name,
  onChange,
  placeholder,
  required,
  rows,
  type = "text",
  value,
}: FormFieldProps) {
  const describedBy = error ? `${name}-error` : hint ? `${name}-hint` : undefined;
  const shared = {
    "aria-describedby": describedBy,
    "aria-invalid": Boolean(error),
    id: name,
    name,
    onChange,
    placeholder,
    required,
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
