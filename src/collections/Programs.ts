import type { CollectionConfig } from 'payload'

export const Programs: CollectionConfig = {
  slug: 'progams',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    // Ajoutez d'autres champs pertinents pour les programmes
  ],
};