

export default function Task3() {

    const table=[
  {
    "Title": "The Lion King",
    "Year": "2019",
    "Runtime": "118 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
  },
  {
    "Title": "Mowgli: Legend of the Jungle",
    "Year": "2018",
    "Runtime": "104 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
  },
  {
    "Title": "Doctor Strange",
    "Year": "2016",
    "Runtime": "115 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
  },
  {
    "Title": "John Wick",
    "Year": "2014",
    "Runtime": "101 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
  },
  {
    "Title": "The Notebook",
    "Year": "2004",
    "Runtime": "123 min"
  }
]

  return (
    <div>
        <h3>Table arrangemnet:</h3>
        <table className="table">
            

            
  <thead>
    <tr>
      <th scope="col">Row</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  
  <tbody>
    {table.map(
                (table)=>(
                    <tr>
                        <td>{table.Title}</td>
                        <td>{table.Year}</td>
                        <td>{table.Runtime}</td>
        
                        <td><img src={table.Poster}/></td>


                    </tr>
                )
            )
        }
    
  </tbody>
</table>
   

    </div>
   
  )
}
