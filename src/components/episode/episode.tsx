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

const Episode:React.FC = () => {
    const [episode, setEpisode] = useState<{release_date:Date;title:string;director:string;opening_crawl:string;characters:string}[] | undefined>()
    useEffect(() => {
        async function fetchEpisode(){
            const res = await fetch('https://swapi.dev/api/films/?format=json');
            const items = await res.json();
            setEpisode(items.results);
        }
        fetchEpisode();
       }, [])
    return (
        <Container>
        <StyledHeader>Episode</StyledHeader>
        <StyledTable>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Opening Crawl</th>
                    <th>Characters</th>
                </tr>
            </thead>
            <tbody>         
                 {
                     episode?.map((row,i)=>{
                         return( 
                             <tr key={i}>                                 
                                 <td>{row.release_date}</td>
                                 <td>{row.title}</td>                               
                                 <td>{row.director}</td>
                                 <td>{row.opening_crawl}</td>
                                 <td>
                                     <a href="/characterspeo">{row.characters}</a>
                                 </td>

                             </tr>
                         )
                     })
                 }
            </tbody>
        </StyledTable>
        </Container>
    )
}

export default Episode;