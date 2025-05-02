import { pgTable, serial, text, integer, timestamp, numeric } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
//import { Formation, Lesson, Chapter, Media, Module, Program, TypeFormation } from '../payload-types';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    email: text('email').notNull().unique(),
    hashedPassword: text('hashedPassword').notNull(),
    role: text('role').notNull().default('student'),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
});

export const media = pgTable('media', {
    id: serial('id').primaryKey(),
    filename: text('filename').notNull(),
    url: text('url').notNull(),
    mimeType: text('mimeType').notNull(),
    filesize: integer('filesize').notNull(),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
});

export const programs = pgTable('programs', {
    id: serial('id').primaryKey(),
    name: text('nom').notNull(),
    description: text('description'),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
});

export const typesFormation = pgTable('typesFormation', {
    id: serial('id').primaryKey(),
    name: text('nom').notNull(),
    description: text('description'),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
});

export const formations = pgTable('formations', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    typeFormationId: integer('typeFormationId').references(() => typesFormation.id),
    programId: integer('programId').references(() => programs.id),
    startDate: timestamp('startDatet'),
    endDate: timestamp('endDate'),
    price: numeric('price'),
    duration: text('duration'),
    image: integer('imageId').references(() => media.id),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
});

export const modules = pgTable('modules', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    description: text('description'),
    estimatedTime: text('estimatedTime'),
    formationId: integer('formationId').references(() => formations.id),
    associatedEvaluation: text('associatedEvaluation'),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
});

export const lessons = pgTable('lessons', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    description: text('description'),
    estimatedTime: text('estimatedTime'),
    moduleId: integer('moduleId').references(() => modules.id),
    teachingMethod: text('teachingMethod'),
    evaluation: text('evaluation'),
    nextSteps: text(' nextSteps'),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
});

export const chapters = pgTable('chapters', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    objectivesChapter: text('objectivesChapter'),
    content: text('content'),
    lessonId: integer('lessonId').references(() => lessons.id),
    type: text('type').notNull(),
    practicalActivities: text('practicalActivities'),
    resume: text('resume'),
    quizExercice: text('quizExercice'),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
});

// Relationships
export const moduleToLesson = relations(modules, {
    lessons: {
        many: [lessons],
        fields: [modules.id],
    },
});

export const lessonToChapter = relations(lessons, {
    chapters: {
        many: [chapters],
        fields: [lessons.id],
    },
});

export const chapterToMedia = relations(chapters, {
    media: {
        many: [media],
        fields: [chapters.id],
    },
});

export const formationToModule = relations(formations, {
    modules: {
        many: [modules],
        fields: [formations.id],
    },
});

export const formationToProgram = relations(formations, {
    programs: {
        many: [programs],
        fields: [formations.programId],
    },
});

export const formationToTypeFormation = relations(formations, {
    typesFormation: {
        many: [typesFormation],
        fields: [formations.typeFormationId],
    },
});

export const formationToMedia = relations(formations, {
    media: {
        many: [media],
        fields: [formations.image],
    },
});
