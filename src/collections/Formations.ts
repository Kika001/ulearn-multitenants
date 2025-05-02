import { CollectionConfig } from 'payload';

export const Formations: CollectionConfig = {
  slug: 'formations',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
     {
      name: 'Duration',
      type: 'text',
    },
    {
      name: 'targetAudience',
      type: 'text',
    },
    {
      name: 'prerequisites',
      type: 'text',
    },
    {
        name: 'format',
        type: 'text'
    },
    {
      name: 'certification',
      type: 'text',
    },
    {
      name: 'price',
      type: 'number',
    },
    {
      name: 'program',
      type: 'relationship',
      relationTo: 'programs',
      required: true,
    },
    {
      name: 'typeFormation',
      type: 'relationship',
      relationTo: 'typesFormation',
      required: true,
    },
    {
      name: 'modules',
      type: 'relationship',
      relationTo: 'modules',
    },
    {
      name: 'lessons',
      type: 'relationship',
      relationTo: 'lessons',
      hasMany: true,
    },
    {
      name: 'chapters',
      type: 'relationship',
      relationTo: 'chapters',
      hasMany: true,
    },
  ],
};
