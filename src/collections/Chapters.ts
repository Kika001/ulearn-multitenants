import { CollectionConfig } from 'payload';
export const Chapters: CollectionConfig ={
  slug: 'chapters',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
     {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    //autres champs
  ]
}