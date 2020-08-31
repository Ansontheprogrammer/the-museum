import styled from 'styled-components'

export const Section = styled.section`
    margin-bottom: 25px;
    
`

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        text-align: center;
      }
`
