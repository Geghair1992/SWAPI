import styled from 'styled-components'

const Star = styled.li`
  margin-bottom: 20px;
  a{
      text-decoration: none;
      color: #000;
  }
`
interface SideBarProps{
    title:string,
    link:string,
  
}

const SidebarStar: React.FC<SideBarProps> = ({title,link}) => {
    return(
        <Star>           
            <a href={link}>{title}</a>
        </Star>
    )
}

export default SidebarStar;