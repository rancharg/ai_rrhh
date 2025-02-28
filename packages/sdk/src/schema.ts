import * as z from './zui'

type SchemaOptions<T> = {
  title: string
  examples: T[]
}

type IsEmptyObject<T> = keyof T extends never ? true : false

type UiDefinition<TSchema extends z.ZuiObjectSchema = z.ZuiObjectSchema> =
  IsEmptyObject<z.infer<TSchema>> extends true
    ? Record<string, never>
    : {
        [K in keyof z.infer<TSchema>]: Partial<SchemaOptions<z.infer<TSchema>[K]>>
      }

export type SchemaDefinition<TSchema extends z.ZuiObjectSchema = z.ZuiObjectSchema> = {
  schema: TSchema

  /**
   * @deprecated
   * Use zod.Schema.displayAs() instead
   **/
  ui?: Partial<UiDefinition<TSchema>>
}
