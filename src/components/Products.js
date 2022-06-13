import {useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

import axios from 'axios'

function Products() {
    const [brands, setbrands] = useState({})
    const [cat, setcat] = useState({})
    const [products, setproducts] = useState({})
    const getData = ()=>{
        return new Promise(async (resolve, reject)=>{
            await axios.get('https://laravel.cvrunway.co.uk/api/iphones').then((response) => {
                resolve(response.data)
            }).catch((err)=>{
                reject(`Sorry! there is some error in api ${err}`)
            })
        })
    }
    useEffect(()=>{
        getData().then((response) => {
            console.log(response)
            setbrands(response.brands)
            setcat(response.categories)
            setproducts(response.product)
            
        })

       
    },[])

    return (
        <>
        <Header/>
        <div className='container'>
            <div className="row py-5">
                <div className="col-3 mb-5 bg-light filter">
                    <Sidebar/>
                </div>
                <div className="col-xs-12 col-md-9 col-lg-9 col-xl-9">
                    <div className="row">
                        {products.length > 0 ? products.map(product => 
                        <div className="col-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="image-box" key={product.id}>
                                <img width="198" className="iphone-image-width" src={`https://justmac.com/storage/images/${product.uploads}`} alt="" />
                            </div>
                            <div className="mt-3 ms-1 product-bar">
                                <small>
                                    {product.category_id.map(cats => cat[cats -1].name + ', ')}
                                </small>
                                <p className='product-title'>
                                    {product.title}
                                </p>
                                <small>{brands[product.brand_id -1].name}</small>
                            </div>
                            <div className='d-inline-flex ai ms-1'>
                                <small>Starting from &nbsp;</small> <p className="product-price"> <b>$  {product.fair}</b></p> 
                            </div>
                        </div>) : null}        
                        
                    </div>

                </div>
            </div>
            
        </div>
        </>
    )
}

export default Products