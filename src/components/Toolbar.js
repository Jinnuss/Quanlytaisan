function Toolbar({ onExport, onImport }) {

    return (

        <div className="toolbar">

            <button className="button" onClick={onExport}>
                Export Excel
            </button>

            <button className="button btn1">
                <label className="btn">

                    Import Excel

                    <input
                        hidden
                        type="file"
                        accept=".xlsx,.xls"
                        onChange={(e) => onImport(e.target.files[0])}
                    />

                </label>
            </button>


        </div>

    );

}

export default Toolbar;