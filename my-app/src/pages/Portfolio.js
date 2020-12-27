import React from 'react'
import { CardView } from 'react-card-with-image';
import 'react-card-with-image/dist/index.css';

const Portfolio = () => {
  const items = [
    {
      id: 1,
      header: 'HUMANITY',
      description:
        '"HIS CHAMBER" is Erick`s watercolor illustration series featuring his signature characters and symbols.  Original art pieces including paintings and sculptures were showcased in Erick`s 1st solo exhibition held at Lois Lambert Gallery in Los Angeles, US from May 12th to July 15th 2012.',
      image: 'ch03.jpg'
    },
    {
      id: 2,
      header: 'TAKE A WALK WITH ME NOW',
      description:
        '"HIS CHAMBER" is Erick`s watercolor illustration series featuring his signature characters and symbols.  Original art pieces including paintings and sculptures were showcased in Erick`s 1st solo exhibition held at Lois Lambert Gallery in Los Angeles, US from May 12th to July 15th 2012.',
      image: 'ch05.jpg'
    },
    {
      id: 3,
      header: 'PURSUIT OF HAPPINESS',
      description:
        '"HIS CHAMBER" is Erick`s watercolor illustration series featuring his signature characters and symbols.  Original art pieces including paintings and sculptures were showcased in Erick`s 1st solo exhibition held at Lois Lambert Gallery in Los Angeles, US from May 12th to July 15th 2012.',
      image: 'ch06.jpg'
    },
    {
      id: 4,
      header: '12 DISCIPLES',
      description:
        ' "HIS CHAMBER" is Erick`s watercolor illustration series featuring his signature characters and symbols.  Original art pieces including paintings and sculptures were showcased in Erick`s 1st solo exhibition held at Lois Lambert Gallery in Los Angeles, US from May 12th to July 15th 2012.',
      image: 'ch08.jpg'
    },
    {
      id: 5,
      header: 'WHERE I BELONG',
      description:
        '"HIS CHAMBER" is Erick`s watercolor illustration series featuring his signature characters and symbols.  Original art pieces including paintings and sculptures were showcased in Erick`s 1st solo exhibition held at Lois Lambert Gallery in Los Angeles, US from May 12th to July 15th 2012.',
      image: 'ch09.jpg'
    },
    {
        id: 6,
        header: 'WHAT TOOK YOU SO LONG?',
        description:
          '"HIS CHAMBER" is Erick`s watercolor illustration series featuring his signature characters and symbols.  Original art pieces including paintings and sculptures were showcased in Erick`s 1st solo exhibition held at Lois Lambert Gallery in Los Angeles, US from May 12th to July 15th 2012.',
        image: 'ch10.jpg'
      },
      {
        id: 7,
        header: '33 DIFFERENT THOUGHTS',
        description:
          '"HIS CHAMBER" is Erick`s watercolor illustration series featuring his signature characters and symbols.  Original art pieces including paintings and sculptures were showcased in Erick`s 1st solo exhibition held at Lois Lambert Gallery in Los Angeles, US from May 12th to July 15th 2012.',
        image: 'ch15.jpg'
      },
      {
        id: 8,
        header: 'JOIN US. WE CAN RULE THE WORLD TOGETHER',
        description:
          '"HIS CHAMBER" is Erick`s watercolor illustration series featuring his signature characters and symbols.  Original art pieces including paintings and sculptures were showcased in Erick`s 1st solo exhibition held at Lois Lambert Gallery in Los Angeles, US from May 12th to July 15th 2012.',
        image: 'ch16.jpg'
      }
  ]
  return (
    <CardView 
      items={items}
      activeColor='#000'
      imageHeight='500px'
      imageWidth='500px'
    />
  )
}

export default Portfolio