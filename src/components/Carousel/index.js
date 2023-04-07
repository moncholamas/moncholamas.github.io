import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Box } from '@mui/system';


const CarouselContainer = ({ items }) => {
    return (
        <Carousel
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

const Item = ({ item }) => {
    return (
        <Box sx={{ minHeight: "420px", padding: "2em" }}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            {
                item.list && <ul>
                    {item.list.map( item => (
                        <li>{item}</li>
                    ))}
                </ul>
            }

            {
                item.next && <Button className="CheckButton" variant='outlined'>
                    Continuar viendo {item.next}
                </Button>
            }

            {
                item.parrafo1 && <p variant='outlined'>
                    {item.parrafo1}
                </p>
            }

            {
                item.parrafo2 && <p variant='outlined'>
                    {item.parrafo2}
                </p>
            }

        </Box>
    )
}



export default CarouselContainer;