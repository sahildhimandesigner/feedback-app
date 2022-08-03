import { useState } from "react";

function RatingSelect({select}) {

    const [selected, setSelected] = useState(10)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value)
    }

    return(        
            <ul className="rating">
                <li className="selecte-li">
                    <input 
                        type="radio" 
                        id="num1" 
                        name="rating" 
                        value="1" 
                        onChange={handleChange} 
                        checked={selected === 1}
                    />
                    <span htmlFor="num1">1</span>
                </li>
                <li className="selecte-li">
                    <input 
                        type="radio" 
                        id="num2" 
                        name="rating" 
                        value="2" 
                        onChange={handleChange} 
                        checked={selected === 2}
                    />
                    <span htmlFor="num2">2</span>
                </li>
                <li className="selecte-li">
                    <input 
                        type="radio" 
                        id="num3" 
                        name="rating" 
                        value="3" 
                        onChange={handleChange} 
                        checked={selected === 3}
                    />
                    <span htmlFor="num3">3</span>
                </li>
                <li className="selecte-li">
                    <input 
                        type="radio" 
                        id="num4" 
                        name="rating" 
                        value="4" 
                        onChange={handleChange} 
                        checked={selected === 1}
                    />
                    <span htmlFor="num4">4</span>
                </li>
                <li className="selecte-li">
                    <input 
                        type="radio" 
                        id="num5" 
                        name="rating" 
                        value="5" 
                        onChange={handleChange} 
                        checked={selected === 5}
                    />
                    <span htmlFor="num5">5</span>
                </li>
                <li className="selecte-li">
                    <input 
                        type="radio" 
                        id="num6" 
                        name="rating" 
                        value="6" 
                        onChange={handleChange} 
                        checked={selected === 6}
                    />
                    <span htmlFor="num6">6</span>
                </li>
                <li className="selecte-li">
                    <input 
                        type="radio" 
                        id="num7" 
                        name="rating" 
                        value="7" 
                        onChange={handleChange} 
                        checked={selected === 7}
                    />
                    <span htmlFor="num7">7</span>
                </li>
                <li className="selecte-li">
                    <input 
                        type="radio" 
                        id="num8" 
                        name="rating" 
                        value="8" 
                        onChange={handleChange} 
                        checked={selected === 8}
                    />
                    <span htmlFor="num7">8</span>
                </li>
                <li className="selecte-li">
                    <input 
                        type="radio" 
                        id="num9" 
                        name="rating" 
                        value="9" 
                        onChange={handleChange} 
                        checked={selected === 9}
                    />
                    <span htmlFor="num9">9</span>
                </li>
                <li className="selecte-li">
                    <input 
                        type="radio" 
                        id="num10" 
                        name="rating" 
                        value="10" 
                        onChange={handleChange} 
                        checked={selected === 10}
                    />
                    <span htmlFor="num10">10</span>
                </li>
            </ul>
    )
}

export default RatingSelect;