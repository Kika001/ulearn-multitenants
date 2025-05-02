import { CollectionConfig } from 'payload';

export const Lessons: CollectionConfig = {
  slug: 'lessons',
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
    // Autres champs
  ]
}
