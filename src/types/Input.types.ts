import { ChangeEvent } from "react";

export interface ITextInput {
    label: string, 
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void, 
    required?: boolean
    placeholder: string
}

export interface ITextArea {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
}

export interface ISelectInput {
    value: string;
    onChange: (value: string) => void
  }
  