import XLSX from 'xlsx';
import React, { useRef, useState } from 'react';
import { Info } from '../../pages/operations/FileLoader';

export interface Props {
    ContainerClassName?: string;
    InputFileClassName?: string;
    ContainerButtonsClassName?: string;
    ConvertButtonClassName?: string;
    CleanButtonsClassName?: string;
    ConvertButtonText?: string;
    CleanButtonText?: string;
    JsonDataSetter: (data: any[] | null) => void;
}


const ExcelToJson = ({
    ContainerClassName = "",
    InputFileClassName = "",
    ContainerButtonsClassName = "",
    ConvertButtonClassName = "",
    CleanButtonsClassName = "",
    ConvertButtonText = "Convert",
    CleanButtonText = "Clean",
    JsonDataSetter,
}: Props) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null)


    const OnchangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files && e.currentTarget.files[0]
        setSelectedFile(file);
    };

    const CleanValues = () => {
        setSelectedFile(null);
        JsonDataSetter(null)
        if (fileInputRef.current !== null) {
            fileInputRef.current.value = "";
        }
    };

    const onSubmitXLS = async () => {
        // window.XLSX.utils.json_to_sheet(data, "out.xlsx");
        if (selectedFile) {

            const data = await selectedFile.arrayBuffer();
            const workbook = XLSX.read(data);
            console.log(workbook)

            const result = XLSX.utils.sheet_to_json<Info>(workbook.Sheets[workbook.SheetNames[0]])
            JsonDataSetter(result)





        }
    };

    return (
        <div className={ContainerClassName}>
            <input
                onChange={OnchangeValue}
                ref={fileInputRef}
                className={InputFileClassName}
                type="file"
                accept=".xls,.xlsx"
            />
            <div className={`${ContainerButtonsClassName}`}>
                {selectedFile && (
                    <button className={ConvertButtonClassName} onClick={onSubmitXLS}>
                        {ConvertButtonText}
                    </button>
                )}
                {selectedFile && (
                    <button className={CleanButtonsClassName} onClick={CleanValues}>
                        {CleanButtonText}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ExcelToJson;
