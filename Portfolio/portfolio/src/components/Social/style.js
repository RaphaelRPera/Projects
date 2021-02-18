import styled from 'styled-components'

export const Icon = styled.a`
    background-image: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: calc(16px + 1vw);
    height: calc(16px + 1vw);
    cursor: pointer;
    // margin configuration on 'IconGroup' component
`

export const IconGroup = styled.div`
    display: flex;
    flex-direction: ${props => props.direction === 'ver' && 'column'};
    justify-content: space-between;
    align-items: center;
    height: 100%;
    
    > ${Icon} {
        margin-right: 14px;
        margin-right: ${props => props.direction === 'ver' && 0};
        margin-bottom: ${props => props.direction === 'ver' && '14px'};
        :last-child{ margin: 0 };
    };
`

