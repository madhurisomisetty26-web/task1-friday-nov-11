

export default function Task2() {

    {/*const model={name:"first",lastname:"last",middlename:"middle"};*/}

    const cities=[{city1:"hyd",city2:"chennai",city3:"bnglr"},
                   {city4:"vizag",city5:"nlr",city6:"onglr"}]
  return (
    <div>
        {/*<h3>Model Names:</h3>
        model:{model.name}<br></br>
        model:{model.lastname}<br></br>
        model:{model.middlename}*/}
    <h3>Number of citites</h3>
       {cities.map((cities)=>(
        <div> {cities.city1} <br></br>
               {cities.city2}<br></br>
               {cities.city3}<br></br>
               {cities.city4}<br></br>
               {cities.city5}<br></br>
               {cities.city6}
        <br></br>
        </div>
       )
       )
       
       }
    </div>
  )
}
{/*note:line 5 y we should not take "[]" element
    line 17 we are not including single statement */}
