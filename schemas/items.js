import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'items',
  title: 'Items',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
   
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
  
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }), 
  ],

 


})
