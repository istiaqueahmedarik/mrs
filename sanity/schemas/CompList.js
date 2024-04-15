export default {
    name: 'compCard',
    title: 'Competitions List',
    type: 'document',
    fields: [
      {
        name: 'imageSrc',
        title: 'Image Source',
        type: 'image',
        responsive: true,
        description: 'The source URL of the image'
      },
      {
        name: 'imageAlt',
        title: 'Image Alt Text',
        type: 'string',
        description: 'The alt text for the image'
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title text'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        description: 'The description text'
      }
    ]
  }