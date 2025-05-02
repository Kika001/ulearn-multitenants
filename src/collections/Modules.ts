import { CollectionConfig } from 'payload';

export const Modules: CollectionConfig = {
    slug: 'modules',
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'description',
        type: 'textarea',
      },
      {
        name: 'formation', // Ajoutez ce champ pour la catégorie du module
        type: 'text',
        required: true
      },
      {
        name: 'duration',
        type: 'text',
      },
      {
        name: 'slug',
        type: 'text',
        required: true,
        unique: true,
      },
      // Ajoutez d'autres champs
    ],
  };