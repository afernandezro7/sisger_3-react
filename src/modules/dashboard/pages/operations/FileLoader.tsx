import React, { useState } from "react";
import ExcelToJson from "../../components/excelForm/ExcelForm";

export interface Info {
  nombre: string;
  apellido: string;
  ci: number;
  telefono: number;
}

export const FileLoader = () => {
  const [JsonData, setJsonData] = useState<Info[] | null>(null);
  return (
    <>
      <ExcelToJson JsonDataSetter={setJsonData} />
      <pre>{JsonData && JSON.stringify(JsonData, null, 2)}</pre>
    </>
  );
};
