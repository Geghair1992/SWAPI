import styled from 'styled-components'
import { useState,useEffect } from 'react'



const StyledTable = styled.table`
   table{
     border: 1px solid #ccc;
     border-collapse: collapse;
 }
 thead{
      th{
          background-color: #dedede;
          padding: 10px;
      }
  }
  tbody{
      td{
          padding: 10px;
          border: 1px solid #ccc;
          a{
              text-decoration: none;
          }
      }
  }   
`
const StyledHeader = styled.h1`
  display: flex;
  flex-direction:row;
`
const Container = styled.div`
   padding: 15px;
`

const Main:React.FC = ()=>{
   const [films, setFilms] = useState<{title:string;release_date:Date;director:string}[] | undefined >()
   useEffect(() => {
    async function fetchFilms(){
        const res = await fetch('https://swapi.dev/api/films/?format=json');
        const items = await res.json();
        setFilms(items.results);
    }
    fetchFilms();
   }, [])
   

    return(
        <Container>
        <StyledHeader>Films</StyledHeader>
        <StyledTable>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Director</th>
                </tr>
            </thead>
            <tbody>         
                 {
                     films?.map((row,i)=>{
                         return( 
                             <tr key={i}>
                                 <td>
                                 <a href="/episode">{row.title}</a>
                                </td>                                 
                                 <td>{row.release_date}</td>
                                 <td>{row.director}</td>
                             </tr>
                         )
                     })
                 }
            </tbody>
        </StyledTable>
        </Container>
    )
}

export default Main;

