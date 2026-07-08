function Toolbar({ onExport, onImport }) {

    return (

        <div className="toolbar">

            <button onClick={onExport}>
                Export Excel
            </button>

            <label className="btn">

                Import Excel

                <input
                    hidden
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={(e) => onImport(e.target.files[0])}
                />

            </label>

        </div>

    );

}

export default Toolbar;