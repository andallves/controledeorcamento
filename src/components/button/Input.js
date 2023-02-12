const Input = (type, text, name, placheholder,setSalario) => {
    return (
        <div>
            <label htmlFor={name}>{text}: </label>
            <input 
                type={type}
                name={name}
                id={name}
                onChange={(e) => setSalario(e.target.value)}
                required
            />
        </div>
    )
}
export default Input