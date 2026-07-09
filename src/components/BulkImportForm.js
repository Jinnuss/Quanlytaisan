import { useState } from "react";

function BulkImportForm({ onSubmit }) {

    const [form, setForm] = useState({

        code: "",

        name: "",

        company: "HXG",

        price: "",

        note: "",

        quantity: 1

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(form);

    };

    return (

        <form onSubmit={handleSubmit} className="form">

            <input
                name="code"
                placeholder="Mã gốc"
                value={form.code}
                onChange={handleChange}
                required
            />

            <input
                name="name"
                placeholder="Tên tài sản"
                value={form.name}
                onChange={handleChange}
                required
            />

            <select
                name="company"
                value={form.company}
                onChange={handleChange}
            >
                <option>HXG</option>
                <option>HOMIE</option>
                <option>GDB</option>
                <option>VFU</option>
                <option>NEW</option>
            </select>

            <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
            />

            <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
            />

            <input
                type="number"
                min="1"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
            />

            <button>
                Nhập kho
            </button>

        </form>

    );

}

export default BulkImportForm;