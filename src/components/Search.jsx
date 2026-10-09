const Search = () => {
    const arrTest = ["Hello", "Nigga", "Sup"]
    return (
        <form className="todo__form">
            <div className="todo__field field">
                <label
                    className="field__label"
                    htmlFor="search-task"
                >
                    Search task
                </label>
                {/* {arrTest.map(item => <p>{item}</p>)} */}
                <input
                    className="field__input"
                    id="search-task"
                    placeholder=" "
                    autoComplete="off"
                    type="search"
                />
            </div>
        </form>
    )
}

export default Search;