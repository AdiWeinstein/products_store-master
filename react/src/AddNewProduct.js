import {useRef} from 'react';

export default function AddNewProduct(){
    const idRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();

    const onAddNewProduct = () => {
        const data = {
            id: idRef.current.value,
            title: titleRef.current.value,
            price: priceRef.current.value,
            description: descriptionRef.current.value,
            image: imageRef.current.value,
        }
        fetch('/products', {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    };

    return (
        
            <div className="addProduct">
                <input ref={idRef} placeholder="id"/>
                <input ref={titleRef} placeholder="Title"/>
                <input ref={priceRef} placeholder="Price"/>
                <input ref={descriptionRef} placeholder="description"/>
                <input ref={imageRef} placeholder="image" value="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"/>
                <button onClick= {onAddNewProduct}> Add new product</button>
            </div>
    )
}