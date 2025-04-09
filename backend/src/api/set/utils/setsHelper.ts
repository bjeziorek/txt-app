

// todo: use listing files and dynamic imports
// with unified generate() funcion in sets

export interface ITemplate<TData> {
    data:TData,
    generate():TData;
}

export type FieldDescription<T> = {
    field: string;
    type: T extends string
      ? "string"
      : T extends number
      ? "number"
      : T extends object
      ? RequiredFields<T> // Rekurencyjne przetwarzanie dla obiektów
      : "unknown"; // Dla innych typów
  };
  
  export type RequiredFields<T> = {
    [K in keyof T]: FieldDescription<T[K]>;
  }[keyof T];
  
  export function generateRequiredFields(definition: any): any[] {
    return Object.entries(definition).map(([field, type]) => ({
      field,
      type: typeof type === "object" ? generateRequiredFields(type) : type,
    }));
  }