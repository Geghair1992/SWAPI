import React,{useState,useEffect} from 'react'
import styled from 'styled-components'


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

const Character = () => {
    const [people , setPeople] = useState<{name:string}[] | undefined>()
 
    useEffect(() => {
        async function fetchPeople(){
            const res = await fetch('https://swapi.dev/api/people/?format=json');
            const items = await res.json();
            setPeople(items.results);
        }

        fetchPeople();
        }, [])

       
    return (
        <Container>
        <StyledHeader>Characters Person</StyledHeader>
        <StyledTable>
            <thead>
                <tr>
                    <th>Names</th>                                    
                </tr>
            </thead>
            <tbody>         
                 {
                     people?.map((row,i)=>{
                         return( 
                             <tr key={i}>                                 
                                 <td>{row.name}</td>                              
                             </tr>
                         )
                     })
                 }
            </tbody>
        </StyledTable>
        </Container>
    )
}

export default Character;