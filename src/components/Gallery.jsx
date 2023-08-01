import React from 'react';
import GalleryMotor from './GalleryMotor';

export default function Gallery() {
    return (
      <div className='container'>
      <h1 className="text-center">Responsive Image Gallery</h1>
      <br />
      <div className="col">
        <GalleryMotor
          galleryID="resp-gallery"
          images={[
            {
              largeURL:
                '/src/components/gallery/mountain.jpg',
              width: 1850,
              height: 2000
            },
            {
              largeURL:
                '/src/components/gallery/lake.jpg',
              width: 1632,
              height: 918
            },
            {
              largeURL:
                '/src/components/gallery/big city.jpg',
              width: 5464,
              height: 3643
            },
            {
              largeURL:
                '/src/components/gallery/forest.jpg',
              width: 1632,
              height: 918
            },
            {
              largeURL:
                '/src/components/gallery/sail.jpg',
              width: 1850,
              height: 2000
            },
            {
              largeURL:
                '/src/components/gallery/mountains and see.jpg',
              width: 1632,
              height: 918
            },
            {
              largeURL:
                '/src/components/gallery/amsterdam.jpg',
              width: 4687,
              height: 1408
            },
            {
              largeURL:
                '/src/components/gallery/city.jpg',
              width: 910,
              height: 1138
            },
            {
              largeURL:
                '/src/components/gallery/corridor.jpg',
              width: 910,
              height: 1365
            },
            {
              largeURL:
                '/src/components/gallery/glass.jpg',
              width: 910,
              height: 1365
            },
            {
              largeURL:
                '/src/components/gallery/mars.jpg',
              width: 1920,
              height: 1200
            },
            {
              largeURL:
                '/src/components/gallery/tree and lake.jpg',
              width: 1920,
              height: 1278
            }
          ]}
        />
      </div>
      </div>
    );
  }