import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Section } from '../components';
import maastro1 from "./img/maastro1.jpeg";
import maastro2 from "./img/maastro2.jpeg";
import ari_farewell from "./img/ari_farewell.jpg";


export default function Gallery() {
  return (
    <div id="gallery">
      <Section title='Gallery'>
        <Box sx={{ height: 450, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={2} gap={10}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Section>
    </div>
  );
}

const itemData = [
  {
    img: maastro1,
    title: 'maastro1',
  },
  {
    img: maastro2,
    title: 'maastro2',
  },
  {
    img: ari_farewell,
    title: 'ari_farewell',
  }
 
];
