import { useState } from "react";

const NewArticle = () => {
    const [newTitle, setNewTitle] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [newText, setNewText] = useState('')

    return (
        <form>
            <ul>
                <li>
                    <label>
                        Title
                        <input type='text'></input>
                    </label>
                </li>
                <li>
                    <label>
                        Category
                        <select id="category-select">
                            <option value="volvo">Volvo</option>
                        </select>
                    </label>
                </li>
                <li>
                    <label>
                        Text
                        <textarea></textarea>
                    </label>
                </li>
                <li>
                    <button>Submit</button>
                </li>
            </ul>
        </form>
    );
};

export default NewArticle;