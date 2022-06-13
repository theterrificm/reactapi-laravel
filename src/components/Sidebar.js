import React from 'react'

function Sidebar({data, filter, setFilter}) {
    
    
    const filterClick = (e)=>{
        e.preventDefault()
        
        const result = data.filter(product => product.title.includes(e.target.value))
        setFilter(result)
        console.log(result)
    }
  return (
    <>
        <div className="sem bg-white mb-3">
                        Select Model
                    </div>
                    <div className='bg-white filter-height filter mb-3 ps-2 py-3'>
                        <div class="form-group form-check">

                            <input type="radio" value="MacBook" className="form-check-input" onClick={(e)=>{filterClick(e)}} name="macbook"  id="macbook" /> 

                            <label className="form-check-label" for="macbook">Macbook</label>
                        </div>
                        <div class="form-group form-check">

                            <input type="radio" className="form-check-input" name="macbook" onClick={(e)=>{filterClick(e)}}  id="macbookpro" value="MacBook Pro" /> 

                            <label className="form-check-label" for="macbookpro">Macbook Pro</label>
                        </div>
                        <div class="form-group form-check">

                            <input value="MACBOOK AIR" type="radio" className="form-check-input" onClick={(e)=>{filterClick(e)}} name="macbook"  id="macbookair" /> 

                            <label className="form-check-label" for="macbookair">Macbook Air</label>
                        </div>
                    </div>
                    <div class="sem bg-white mb-3">

                        Select Screen

                    </div>
                    <div className='bg-white filter mb-3 ps-2 pt-3'>
                        <div class="form-group form-check">

                            <input type="radio" className="form-check-input"  /> 

                            <label class="form-check-label" for="years">11-Inch</label>

                        </div>
                        <div class="form-group form-check">

                            <input type="radio" className="form-check-input"  /> 

                            <label class="form-check-label" for="years">12-Inch</label>

                        </div>
                        <div class="form-group form-check">

                            <input type="radio" className="form-check-input"  /> 

                            <label class="form-check-label" for="years">13-Inch</label>

                        </div>
                    </div>
                    <div class="sem bg-white mb-3">
                        Select Model Year
                    </div>
                    <div className='bg-white filter mb-3 ps-2 pt-3'>
                        <div className="form-group form-check">

                            <input type="radio" className="form-check-input" /> 

                            <label className="form-check-label" for="years">2016</label>

                        </div>
                        <div className="form-group form-check">

                            <input type="radio" className="form-check-input" /> 

                            <label className="form-check-label" for="years">2017</label>

                        </div>
                        <div className="form-group form-check">

                            <input type="radio" className="form-check-input" /> 

                            <label className="form-check-label" for="years">2018</label>

                        </div>
                        <div className="form-group form-check">

                            <input type="radio" className="form-check-input" /> 

                            <label className="form-check-label" for="years">2019</label>

                        </div>
                    </div>
    </>
  )
}

export default Sidebar