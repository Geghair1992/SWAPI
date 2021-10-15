import styled from 'styled-components'
import SidebarStar from './sidebarStar'

const Aside = styled.aside`
   width: 20%;
   
`

const SidebarList = styled.ul`
   display: flex;
   flex-direction: column;
   height: 100vh;
   justify-content:flex-start;
`

const star = [
    {
       title:'Main',
       link: '/'
    },
    {
       title:'Episode',
       link: '/episode'
    },
    {
       title:'Characters People',
       link:'/characterspeo'
    },
    {
        title:'Characters Person',
        link:'/charactersper'
    },
]

const Sidebar:React.FC = ()=>{
    return(
        <Aside>
            <SidebarList>
               {star.map((item,index)=>{
                    return(
                        <SidebarStar key={index} title={item.title} link={item.link} />
                    )
                })}
            </SidebarList>
        </Aside>
    )
}

export default Sidebar;