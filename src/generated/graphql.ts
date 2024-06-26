/* eslint-disable no-unused-vars */
import { GraphQLClient, RequestOptions } from 'graphql-request'
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders']
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: any; output: any }
  DateTime: { input: any; output: any }
  Hex: { input: any; output: any }
  Json: { input: any; output: any }
  Long: { input: any; output: any }
  RGBAHue: { input: any; output: any }
  RGBATransparency: { input: any; output: any }
  RichTextAST: { input: any; output: any }
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']['output']
}

/** Asset system model */
export type Asset = Entity &
  Node & {
    __typename?: 'Asset'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Get the document in other stages */
    documentInStages: Array<Asset>
    /** The file name */
    fileName: Scalars['String']['output']
    /** The file handle */
    handle: Scalars['String']['output']
    /** The height of the file */
    height?: Maybe<Scalars['Float']['output']>
    /** List of Asset versions */
    history: Array<Version>
    /** The unique identifier */
    id: Scalars['ID']['output']
    imageExercise: Array<Exercise>
    imageProgram: Array<Program>
    imageWorkout: Array<Workout>
    /** System Locale field */
    locale: Locale
    /** Get the other localizations for this document */
    localizations: Array<Asset>
    /** The mime type of the file */
    mimeType?: Maybe<Scalars['String']['output']>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    scheduledIn: Array<ScheduledOperation>
    /** The file size */
    size?: Maybe<Scalars['Float']['output']>
    /** System stage field */
    stage: Stage
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
    /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
    upload?: Maybe<AssetUpload>
    /** Get the url for the asset with provided transformations applied. */
    url: Scalars['String']['output']
    /** The file width */
    width?: Maybe<Scalars['Float']['output']>
  }

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

/** Asset system model */
export type AssetImageExerciseArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ExerciseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ExerciseWhereInput>
}

/** Asset system model */
export type AssetImageProgramArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ProgramOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProgramWhereInput>
}

/** Asset system model */
export type AssetImageWorkoutArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<WorkoutOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WorkoutWhereInput>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  fileName?: InputMaybe<Scalars['String']['input']>
  imageExercise?: InputMaybe<ExerciseCreateManyInlineInput>
  imageProgram?: InputMaybe<ProgramCreateManyInlineInput>
  imageWorkout?: InputMaybe<WorkoutCreateManyInlineInput>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  fileName?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  imageExercise_every?: InputMaybe<ExerciseWhereInput>
  imageExercise_none?: InputMaybe<ExerciseWhereInput>
  imageExercise_some?: InputMaybe<ExerciseWhereInput>
  imageProgram_every?: InputMaybe<ProgramWhereInput>
  imageProgram_none?: InputMaybe<ProgramWhereInput>
  imageProgram_some?: InputMaybe<ProgramWhereInput>
  imageWorkout_every?: InputMaybe<WorkoutWhereInput>
  imageWorkout_none?: InputMaybe<WorkoutWhereInput>
  imageWorkout_some?: InputMaybe<WorkoutWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  upload?: InputMaybe<AssetUploadWhereInput>
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetSingleRelationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetSingleRelationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetSingleRelationWhereInput>>
  upload?: InputMaybe<AssetUploadWhereInput>
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>
  image?: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>
}

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  imageExercise?: InputMaybe<ExerciseUpdateManyInlineInput>
  imageProgram?: InputMaybe<ProgramUpdateManyInlineInput>
  imageWorkout?: InputMaybe<WorkoutUpdateManyInlineInput>
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>
}

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** Asset Upload */
export type AssetUpload = {
  __typename?: 'AssetUpload'
  /** Asset Upload Error */
  error?: Maybe<AssetUploadError>
  /** Expiry Timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>
  /** Asset Request Data for upload */
  requestPostData?: Maybe<AssetUploadRequestPostData>
  /** Asset Request Data for upload */
  status?: Maybe<AssetUploadStatus>
}

/** Represents asset upload error */
export type AssetUploadError = {
  __typename?: 'AssetUploadError'
  code: Scalars['String']['output']
  message: Scalars['String']['output']
}

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
  __typename?: 'AssetUploadRequestPostData'
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output']
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output']
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output']
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output']
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output']
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken?: Maybe<Scalars['String']['output']>
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output']
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output']
}

/** System Asset Upload Status */
export enum AssetUploadStatus {
  AssetCreatePending = 'ASSET_CREATE_PENDING',
  AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
  AssetUpdatePending = 'ASSET_UPDATE_PENDING',
  AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE',
}

/** Identifies documents */
export type AssetUploadWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  status?: InputMaybe<AssetUploadStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>
}

/** Identifies documents */
export type AssetUploadWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  status?: InputMaybe<AssetUploadStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  fileName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  imageExercise_every?: InputMaybe<ExerciseWhereInput>
  imageExercise_none?: InputMaybe<ExerciseWhereInput>
  imageExercise_some?: InputMaybe<ExerciseWhereInput>
  imageProgram_every?: InputMaybe<ProgramWhereInput>
  imageProgram_none?: InputMaybe<ProgramWhereInput>
  imageProgram_some?: InputMaybe<ProgramWhereInput>
  imageWorkout_every?: InputMaybe<WorkoutWhereInput>
  imageWorkout_none?: InputMaybe<WorkoutWhereInput>
  imageWorkout_some?: InputMaybe<WorkoutWhereInput>
  mimeType?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  upload?: InputMaybe<AssetUploadWhereInput>
  width?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output']
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  css: Scalars['String']['output']
  hex: Scalars['Hex']['output']
  rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>
  rgba?: InputMaybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>
}

export enum DocumentFileTypes {
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  AutoImage = 'autoImage',
  Avif = 'avif',
  Bmp = 'bmp',
  Gif = 'gif',
  Heic = 'heic',
  Jpg = 'jpg',
  Png = 'png',
  Svg = 'svg',
  Tiff = 'tiff',
  Webp = 'webp',
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  createdAt: Scalars['DateTime']['output']
  data?: Maybe<Scalars['Json']['output']>
  id: Scalars['ID']['output']
  revision: Scalars['Int']['output']
  stage: Stage
}

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output']
  /** The Stage of an object */
  stage: Stage
}

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Exercise = 'Exercise',
  Program = 'Program',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  Step = 'Step',
  /** User system model */
  User = 'User',
  Workout = 'Workout',
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input']
  locale?: InputMaybe<Locale>
  stage: Stage
  /** The Type name of an object */
  typename: EntityTypeName
}

export type Exercise = Entity &
  Node & {
    __typename?: 'Exercise'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    description?: Maybe<Scalars['String']['output']>
    /** Get the document in other stages */
    documentInStages: Array<Exercise>
    duration?: Maybe<Scalars['Int']['output']>
    /** List of Exercise versions */
    history: Array<Version>
    /** The unique identifier */
    id: Scalars['ID']['output']
    image?: Maybe<Asset>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    repetitions?: Maybe<Scalars['Int']['output']>
    scheduledIn: Array<ScheduledOperation>
    /** System stage field */
    stage: Stage
    steps: Array<Step>
    title?: Maybe<Scalars['String']['output']>
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
    videoUrl?: Maybe<Scalars['String']['output']>
  }

export type ExerciseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ExerciseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type ExerciseHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type ExerciseImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
  where?: InputMaybe<AssetSingleRelationWhereInput>
}

export type ExercisePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ExerciseScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type ExerciseStepsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<StepOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<StepWhereInput>
}

export type ExerciseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ExerciseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ExerciseWhereUniqueInput
}

/** A connection to a list of items. */
export type ExerciseConnection = {
  __typename?: 'ExerciseConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ExerciseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ExerciseCreateInput = {
  clx06rw4q0ji907w5dtajc887?: InputMaybe<WorkoutCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  duration?: InputMaybe<Scalars['Int']['input']>
  image?: InputMaybe<AssetCreateOneInlineInput>
  repetitions?: InputMaybe<Scalars['Int']['input']>
  steps?: InputMaybe<StepCreateManyInlineInput>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  videoUrl?: InputMaybe<Scalars['String']['input']>
}

export type ExerciseCreateManyInlineInput = {
  /** Connect multiple existing Exercise documents */
  connect?: InputMaybe<Array<ExerciseWhereUniqueInput>>
  /** Create and connect multiple existing Exercise documents */
  create?: InputMaybe<Array<ExerciseCreateInput>>
}

export type ExerciseCreateOneInlineInput = {
  /** Connect one existing Exercise document */
  connect?: InputMaybe<ExerciseWhereUniqueInput>
  /** Create and connect one Exercise document */
  create?: InputMaybe<ExerciseCreateInput>
}

/** An edge in a connection. */
export type ExerciseEdge = {
  __typename?: 'ExerciseEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Exercise
}

/** Identifies documents */
export type ExerciseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExerciseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExerciseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExerciseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<ExerciseWhereStageInput>
  documentInStages_none?: InputMaybe<ExerciseWhereStageInput>
  documentInStages_some?: InputMaybe<ExerciseWhereStageInput>
  duration?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than the given value. */
  duration_gt?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than or equal the given value. */
  duration_gte?: InputMaybe<Scalars['Int']['input']>
  /** All values that are contained in given list. */
  duration_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  /** All values less than the given value. */
  duration_lt?: InputMaybe<Scalars['Int']['input']>
  /** All values less than or equal the given value. */
  duration_lte?: InputMaybe<Scalars['Int']['input']>
  /** Any other value that exists and is not equal to the given value. */
  duration_not?: InputMaybe<Scalars['Int']['input']>
  /** All values that are not contained in given list. */
  duration_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  repetitions?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than the given value. */
  repetitions_gt?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than or equal the given value. */
  repetitions_gte?: InputMaybe<Scalars['Int']['input']>
  /** All values that are contained in given list. */
  repetitions_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  /** All values less than the given value. */
  repetitions_lt?: InputMaybe<Scalars['Int']['input']>
  /** All values less than or equal the given value. */
  repetitions_lte?: InputMaybe<Scalars['Int']['input']>
  /** Any other value that exists and is not equal to the given value. */
  repetitions_not?: InputMaybe<Scalars['Int']['input']>
  /** All values that are not contained in given list. */
  repetitions_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  steps_every?: InputMaybe<StepWhereInput>
  steps_none?: InputMaybe<StepWhereInput>
  steps_some?: InputMaybe<StepWhereInput>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  videoUrl?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  videoUrl_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  videoUrl_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  videoUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  videoUrl_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  videoUrl_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  videoUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  videoUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  videoUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  videoUrl_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum ExerciseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RepetitionsAsc = 'repetitions_ASC',
  RepetitionsDesc = 'repetitions_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VideoUrlAsc = 'videoUrl_ASC',
  VideoUrlDesc = 'videoUrl_DESC',
}

export type ExerciseUpdateInput = {
  clx06rw4q0ji907w5dtajc887?: InputMaybe<WorkoutUpdateManyInlineInput>
  description?: InputMaybe<Scalars['String']['input']>
  duration?: InputMaybe<Scalars['Int']['input']>
  image?: InputMaybe<AssetUpdateOneInlineInput>
  repetitions?: InputMaybe<Scalars['Int']['input']>
  steps?: InputMaybe<StepUpdateManyInlineInput>
  title?: InputMaybe<Scalars['String']['input']>
  videoUrl?: InputMaybe<Scalars['String']['input']>
}

export type ExerciseUpdateManyInlineInput = {
  /** Connect multiple existing Exercise documents */
  connect?: InputMaybe<Array<ExerciseConnectInput>>
  /** Create and connect multiple Exercise documents */
  create?: InputMaybe<Array<ExerciseCreateInput>>
  /** Delete multiple Exercise documents */
  delete?: InputMaybe<Array<ExerciseWhereUniqueInput>>
  /** Disconnect multiple Exercise documents */
  disconnect?: InputMaybe<Array<ExerciseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Exercise documents */
  set?: InputMaybe<Array<ExerciseWhereUniqueInput>>
  /** Update multiple Exercise documents */
  update?: InputMaybe<Array<ExerciseUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Exercise documents */
  upsert?: InputMaybe<Array<ExerciseUpsertWithNestedWhereUniqueInput>>
}

export type ExerciseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  duration?: InputMaybe<Scalars['Int']['input']>
  repetitions?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  videoUrl?: InputMaybe<Scalars['String']['input']>
}

export type ExerciseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ExerciseUpdateManyInput
  /** Document search */
  where: ExerciseWhereInput
}

export type ExerciseUpdateOneInlineInput = {
  /** Connect existing Exercise document */
  connect?: InputMaybe<ExerciseWhereUniqueInput>
  /** Create and connect one Exercise document */
  create?: InputMaybe<ExerciseCreateInput>
  /** Delete currently connected Exercise document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Exercise document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Exercise document */
  update?: InputMaybe<ExerciseUpdateWithNestedWhereUniqueInput>
  /** Upsert single Exercise document */
  upsert?: InputMaybe<ExerciseUpsertWithNestedWhereUniqueInput>
}

export type ExerciseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ExerciseUpdateInput
  /** Unique document search */
  where: ExerciseWhereUniqueInput
}

export type ExerciseUpsertInput = {
  /** Create document if it didn't exist */
  create: ExerciseCreateInput
  /** Update document if it exists */
  update: ExerciseUpdateInput
}

export type ExerciseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ExerciseUpsertInput
  /** Unique document search */
  where: ExerciseWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type ExerciseWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type ExerciseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExerciseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExerciseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExerciseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<ExerciseWhereStageInput>
  documentInStages_none?: InputMaybe<ExerciseWhereStageInput>
  documentInStages_some?: InputMaybe<ExerciseWhereStageInput>
  duration?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than the given value. */
  duration_gt?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than or equal the given value. */
  duration_gte?: InputMaybe<Scalars['Int']['input']>
  /** All values that are contained in given list. */
  duration_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  /** All values less than the given value. */
  duration_lt?: InputMaybe<Scalars['Int']['input']>
  /** All values less than or equal the given value. */
  duration_lte?: InputMaybe<Scalars['Int']['input']>
  /** Any other value that exists and is not equal to the given value. */
  duration_not?: InputMaybe<Scalars['Int']['input']>
  /** All values that are not contained in given list. */
  duration_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  repetitions?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than the given value. */
  repetitions_gt?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than or equal the given value. */
  repetitions_gte?: InputMaybe<Scalars['Int']['input']>
  /** All values that are contained in given list. */
  repetitions_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  /** All values less than the given value. */
  repetitions_lt?: InputMaybe<Scalars['Int']['input']>
  /** All values less than or equal the given value. */
  repetitions_lte?: InputMaybe<Scalars['Int']['input']>
  /** Any other value that exists and is not equal to the given value. */
  repetitions_not?: InputMaybe<Scalars['Int']['input']>
  /** All values that are not contained in given list. */
  repetitions_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  steps_every?: InputMaybe<StepWhereInput>
  steps_none?: InputMaybe<StepWhereInput>
  steps_some?: InputMaybe<StepWhereInput>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  videoUrl?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  videoUrl_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  videoUrl_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  videoUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  videoUrl_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  videoUrl_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  videoUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  videoUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  videoUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  videoUrl_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ExerciseWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExerciseWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExerciseWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExerciseWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ExerciseWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Exercise record uniquely */
export type ExerciseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type ImageBlurInput = {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input']
}

/** Adds a border to the image. */
export type ImageBorderInput = {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input']
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input']
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input']
}

export type ImageCompressInput = {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input']
}

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input']
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input']
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input']
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input']
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
}

export type ImageQualityInput = {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input']
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>
}

export type ImageSharpenInput = {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input']
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Blurs the image. */
  blur?: InputMaybe<ImageBlurInput>
  /** Adds a border to the image. */
  border?: InputMaybe<ImageBorderInput>
  /** Compresses the image. */
  compress?: InputMaybe<ImageCompressInput>
  /** Crops the image to the specified dimensions. */
  crop?: InputMaybe<ImageCropInput>
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality?: InputMaybe<ImageQualityInput>
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>
  /** Sharpens the image. */
  sharpen?: InputMaybe<ImageSharpenInput>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  distance: Scalars['Float']['output']
  latitude: Scalars['Float']['output']
  longitude: Scalars['Float']['output']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset?: Maybe<Asset>
  /** Create one exercise */
  createExercise?: Maybe<Exercise>
  /** Create one program */
  createProgram?: Maybe<Program>
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>
  /** Create one step */
  createStep?: Maybe<Step>
  /** Create one workout */
  createWorkout?: Maybe<Workout>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Delete one exercise from _all_ existing stages. Returns deleted document. */
  deleteExercise?: Maybe<Exercise>
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /**
   * Delete many Exercise documents
   * @deprecated Please use the new paginated many mutation (deleteManyExercisesConnection)
   */
  deleteManyExercises: BatchPayload
  /** Delete many Exercise documents, return deleted documents */
  deleteManyExercisesConnection: ExerciseConnection
  /**
   * Delete many Program documents
   * @deprecated Please use the new paginated many mutation (deleteManyProgramsConnection)
   */
  deleteManyPrograms: BatchPayload
  /** Delete many Program documents, return deleted documents */
  deleteManyProgramsConnection: ProgramConnection
  /**
   * Delete many Step documents
   * @deprecated Please use the new paginated many mutation (deleteManyStepsConnection)
   */
  deleteManySteps: BatchPayload
  /** Delete many Step documents, return deleted documents */
  deleteManyStepsConnection: StepConnection
  /**
   * Delete many Workout documents
   * @deprecated Please use the new paginated many mutation (deleteManyWorkoutsConnection)
   */
  deleteManyWorkouts: BatchPayload
  /** Delete many Workout documents, return deleted documents */
  deleteManyWorkoutsConnection: WorkoutConnection
  /** Delete one program from _all_ existing stages. Returns deleted document. */
  deleteProgram?: Maybe<Program>
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>
  /** Delete one step from _all_ existing stages. Returns deleted document. */
  deleteStep?: Maybe<Step>
  /** Delete one workout from _all_ existing stages. Returns deleted document. */
  deleteWorkout?: Maybe<Workout>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Publish one exercise */
  publishExercise?: Maybe<Exercise>
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /**
   * Publish many Exercise documents
   * @deprecated Please use the new paginated many mutation (publishManyExercisesConnection)
   */
  publishManyExercises: BatchPayload
  /** Publish many Exercise documents */
  publishManyExercisesConnection: ExerciseConnection
  /**
   * Publish many Program documents
   * @deprecated Please use the new paginated many mutation (publishManyProgramsConnection)
   */
  publishManyPrograms: BatchPayload
  /** Publish many Program documents */
  publishManyProgramsConnection: ProgramConnection
  /**
   * Publish many Step documents
   * @deprecated Please use the new paginated many mutation (publishManyStepsConnection)
   */
  publishManySteps: BatchPayload
  /** Publish many Step documents */
  publishManyStepsConnection: StepConnection
  /**
   * Publish many Workout documents
   * @deprecated Please use the new paginated many mutation (publishManyWorkoutsConnection)
   */
  publishManyWorkouts: BatchPayload
  /** Publish many Workout documents */
  publishManyWorkoutsConnection: WorkoutConnection
  /** Publish one program */
  publishProgram?: Maybe<Program>
  /** Publish one step */
  publishStep?: Maybe<Step>
  /** Publish one workout */
  publishWorkout?: Maybe<Workout>
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>
  /** Schedule to publish one exercise */
  schedulePublishExercise?: Maybe<Exercise>
  /** Schedule to publish one program */
  schedulePublishProgram?: Maybe<Program>
  /** Schedule to publish one step */
  schedulePublishStep?: Maybe<Step>
  /** Schedule to publish one workout */
  schedulePublishWorkout?: Maybe<Workout>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>
  /** Unpublish one exercise from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishExercise?: Maybe<Exercise>
  /** Unpublish one program from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProgram?: Maybe<Program>
  /** Unpublish one step from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishStep?: Maybe<Step>
  /** Unpublish one workout from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishWorkout?: Maybe<Workout>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Unpublish one exercise from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishExercise?: Maybe<Exercise>
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Unpublish many Exercise documents
   * @deprecated Please use the new paginated many mutation (unpublishManyExercisesConnection)
   */
  unpublishManyExercises: BatchPayload
  /** Find many Exercise documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyExercisesConnection: ExerciseConnection
  /**
   * Unpublish many Program documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProgramsConnection)
   */
  unpublishManyPrograms: BatchPayload
  /** Find many Program documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProgramsConnection: ProgramConnection
  /**
   * Unpublish many Step documents
   * @deprecated Please use the new paginated many mutation (unpublishManyStepsConnection)
   */
  unpublishManySteps: BatchPayload
  /** Find many Step documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStepsConnection: StepConnection
  /**
   * Unpublish many Workout documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWorkoutsConnection)
   */
  unpublishManyWorkouts: BatchPayload
  /** Find many Workout documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWorkoutsConnection: WorkoutConnection
  /** Unpublish one program from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProgram?: Maybe<Program>
  /** Unpublish one step from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStep?: Maybe<Step>
  /** Unpublish one workout from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWorkout?: Maybe<Workout>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Update one exercise */
  updateExercise?: Maybe<Exercise>
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /**
   * Update many exercises
   * @deprecated Please use the new paginated many mutation (updateManyExercisesConnection)
   */
  updateManyExercises: BatchPayload
  /** Update many Exercise documents */
  updateManyExercisesConnection: ExerciseConnection
  /**
   * Update many programs
   * @deprecated Please use the new paginated many mutation (updateManyProgramsConnection)
   */
  updateManyPrograms: BatchPayload
  /** Update many Program documents */
  updateManyProgramsConnection: ProgramConnection
  /**
   * Update many steps
   * @deprecated Please use the new paginated many mutation (updateManyStepsConnection)
   */
  updateManySteps: BatchPayload
  /** Update many Step documents */
  updateManyStepsConnection: StepConnection
  /**
   * Update many workouts
   * @deprecated Please use the new paginated many mutation (updateManyWorkoutsConnection)
   */
  updateManyWorkouts: BatchPayload
  /** Update many Workout documents */
  updateManyWorkoutsConnection: WorkoutConnection
  /** Update one program */
  updateProgram?: Maybe<Program>
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>
  /** Update one step */
  updateStep?: Maybe<Step>
  /** Update one workout */
  updateWorkout?: Maybe<Workout>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Upsert one exercise */
  upsertExercise?: Maybe<Exercise>
  /** Upsert one program */
  upsertProgram?: Maybe<Program>
  /** Upsert one step */
  upsertStep?: Maybe<Step>
  /** Upsert one workout */
  upsertWorkout?: Maybe<Workout>
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreateExerciseArgs = {
  data: ExerciseCreateInput
}

export type MutationCreateProgramArgs = {
  data: ProgramCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput
}

export type MutationCreateStepArgs = {
  data: StepCreateInput
}

export type MutationCreateWorkoutArgs = {
  data: WorkoutCreateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteExerciseArgs = {
  where: ExerciseWhereUniqueInput
}

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyExercisesArgs = {
  where?: InputMaybe<ExerciseManyWhereInput>
}

export type MutationDeleteManyExercisesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ExerciseManyWhereInput>
}

export type MutationDeleteManyProgramsArgs = {
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationDeleteManyProgramsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationDeleteManyStepsArgs = {
  where?: InputMaybe<StepManyWhereInput>
}

export type MutationDeleteManyStepsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<StepManyWhereInput>
}

export type MutationDeleteManyWorkoutsArgs = {
  where?: InputMaybe<WorkoutManyWhereInput>
}

export type MutationDeleteManyWorkoutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WorkoutManyWhereInput>
}

export type MutationDeleteProgramArgs = {
  where: ProgramWhereUniqueInput
}

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationDeleteStepArgs = {
  where: StepWhereUniqueInput
}

export type MutationDeleteWorkoutArgs = {
  where: WorkoutWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishExerciseArgs = {
  to?: Array<Stage>
  where: ExerciseWhereUniqueInput
}

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishManyExercisesArgs = {
  to?: Array<Stage>
  where?: InputMaybe<ExerciseManyWhereInput>
}

export type MutationPublishManyExercisesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<ExerciseManyWhereInput>
}

export type MutationPublishManyProgramsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationPublishManyProgramsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationPublishManyStepsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<StepManyWhereInput>
}

export type MutationPublishManyStepsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<StepManyWhereInput>
}

export type MutationPublishManyWorkoutsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<WorkoutManyWhereInput>
}

export type MutationPublishManyWorkoutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<WorkoutManyWhereInput>
}

export type MutationPublishProgramArgs = {
  to?: Array<Stage>
  where: ProgramWhereUniqueInput
}

export type MutationPublishStepArgs = {
  to?: Array<Stage>
  where: StepWhereUniqueInput
}

export type MutationPublishWorkoutArgs = {
  to?: Array<Stage>
  where: WorkoutWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationSchedulePublishExerciseArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: ExerciseWhereUniqueInput
}

export type MutationSchedulePublishProgramArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: ProgramWhereUniqueInput
}

export type MutationSchedulePublishStepArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: StepWhereUniqueInput
}

export type MutationSchedulePublishWorkoutArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: WorkoutWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishExerciseArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: ExerciseWhereUniqueInput
}

export type MutationScheduleUnpublishProgramArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: ProgramWhereUniqueInput
}

export type MutationScheduleUnpublishStepArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: StepWhereUniqueInput
}

export type MutationScheduleUnpublishWorkoutArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: WorkoutWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishExerciseArgs = {
  from?: Array<Stage>
  where: ExerciseWhereUniqueInput
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyExercisesArgs = {
  from?: Array<Stage>
  where?: InputMaybe<ExerciseManyWhereInput>
}

export type MutationUnpublishManyExercisesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<ExerciseManyWhereInput>
}

export type MutationUnpublishManyProgramsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationUnpublishManyProgramsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationUnpublishManyStepsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<StepManyWhereInput>
}

export type MutationUnpublishManyStepsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<StepManyWhereInput>
}

export type MutationUnpublishManyWorkoutsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<WorkoutManyWhereInput>
}

export type MutationUnpublishManyWorkoutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<WorkoutManyWhereInput>
}

export type MutationUnpublishProgramArgs = {
  from?: Array<Stage>
  where: ProgramWhereUniqueInput
}

export type MutationUnpublishStepArgs = {
  from?: Array<Stage>
  where: StepWhereUniqueInput
}

export type MutationUnpublishWorkoutArgs = {
  from?: Array<Stage>
  where: WorkoutWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateExerciseArgs = {
  data: ExerciseUpdateInput
  where: ExerciseWhereUniqueInput
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: AssetUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyExercisesArgs = {
  data: ExerciseUpdateManyInput
  where?: InputMaybe<ExerciseManyWhereInput>
}

export type MutationUpdateManyExercisesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: ExerciseUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ExerciseManyWhereInput>
}

export type MutationUpdateManyProgramsArgs = {
  data: ProgramUpdateManyInput
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationUpdateManyProgramsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: ProgramUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationUpdateManyStepsArgs = {
  data: StepUpdateManyInput
  where?: InputMaybe<StepManyWhereInput>
}

export type MutationUpdateManyStepsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: StepUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<StepManyWhereInput>
}

export type MutationUpdateManyWorkoutsArgs = {
  data: WorkoutUpdateManyInput
  where?: InputMaybe<WorkoutManyWhereInput>
}

export type MutationUpdateManyWorkoutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: WorkoutUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WorkoutManyWhereInput>
}

export type MutationUpdateProgramArgs = {
  data: ProgramUpdateInput
  where: ProgramWhereUniqueInput
}

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpdateStepArgs = {
  data: StepUpdateInput
  where: StepWhereUniqueInput
}

export type MutationUpdateWorkoutArgs = {
  data: WorkoutUpdateInput
  where: WorkoutWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertExerciseArgs = {
  upsert: ExerciseUpsertInput
  where: ExerciseWhereUniqueInput
}

export type MutationUpsertProgramArgs = {
  upsert: ProgramUpsertInput
  where: ProgramWhereUniqueInput
}

export type MutationUpsertStepArgs = {
  upsert: StepUpsertInput
  where: StepWhereUniqueInput
}

export type MutationUpsertWorkoutArgs = {
  upsert: WorkoutUpsertInput
  where: WorkoutWhereUniqueInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output']
  /** The Stage of an object */
  stage: Stage
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

export type Program = Entity &
  Node & {
    __typename?: 'Program'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    description?: Maybe<Scalars['String']['output']>
    /** Get the document in other stages */
    documentInStages: Array<Program>
    /** List of Program versions */
    history: Array<Version>
    /** The unique identifier */
    id: Scalars['ID']['output']
    image?: Maybe<Asset>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    scheduledIn: Array<ScheduledOperation>
    /** System stage field */
    stage: Stage
    title?: Maybe<Scalars['String']['output']>
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
    workouts: Array<Workout>
  }

export type ProgramCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProgramDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type ProgramHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type ProgramImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
  where?: InputMaybe<AssetSingleRelationWhereInput>
}

export type ProgramPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProgramScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type ProgramUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProgramWorkoutsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<WorkoutOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WorkoutWhereInput>
}

export type ProgramConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ProgramWhereUniqueInput
}

/** A connection to a list of items. */
export type ProgramConnection = {
  __typename?: 'ProgramConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ProgramEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ProgramCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<AssetCreateOneInlineInput>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  workouts?: InputMaybe<WorkoutCreateManyInlineInput>
}

export type ProgramCreateManyInlineInput = {
  /** Connect multiple existing Program documents */
  connect?: InputMaybe<Array<ProgramWhereUniqueInput>>
  /** Create and connect multiple existing Program documents */
  create?: InputMaybe<Array<ProgramCreateInput>>
}

export type ProgramCreateOneInlineInput = {
  /** Connect one existing Program document */
  connect?: InputMaybe<ProgramWhereUniqueInput>
  /** Create and connect one Program document */
  create?: InputMaybe<ProgramCreateInput>
}

/** An edge in a connection. */
export type ProgramEdge = {
  __typename?: 'ProgramEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Program
}

/** Identifies documents */
export type ProgramManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProgramWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProgramWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProgramWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<ProgramWhereStageInput>
  documentInStages_none?: InputMaybe<ProgramWhereStageInput>
  documentInStages_some?: InputMaybe<ProgramWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  workouts_every?: InputMaybe<WorkoutWhereInput>
  workouts_none?: InputMaybe<WorkoutWhereInput>
  workouts_some?: InputMaybe<WorkoutWhereInput>
}

export enum ProgramOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProgramUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<AssetUpdateOneInlineInput>
  title?: InputMaybe<Scalars['String']['input']>
  workouts?: InputMaybe<WorkoutUpdateManyInlineInput>
}

export type ProgramUpdateManyInlineInput = {
  /** Connect multiple existing Program documents */
  connect?: InputMaybe<Array<ProgramConnectInput>>
  /** Create and connect multiple Program documents */
  create?: InputMaybe<Array<ProgramCreateInput>>
  /** Delete multiple Program documents */
  delete?: InputMaybe<Array<ProgramWhereUniqueInput>>
  /** Disconnect multiple Program documents */
  disconnect?: InputMaybe<Array<ProgramWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Program documents */
  set?: InputMaybe<Array<ProgramWhereUniqueInput>>
  /** Update multiple Program documents */
  update?: InputMaybe<Array<ProgramUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Program documents */
  upsert?: InputMaybe<Array<ProgramUpsertWithNestedWhereUniqueInput>>
}

export type ProgramUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ProgramUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProgramUpdateManyInput
  /** Document search */
  where: ProgramWhereInput
}

export type ProgramUpdateOneInlineInput = {
  /** Connect existing Program document */
  connect?: InputMaybe<ProgramWhereUniqueInput>
  /** Create and connect one Program document */
  create?: InputMaybe<ProgramCreateInput>
  /** Delete currently connected Program document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Program document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Program document */
  update?: InputMaybe<ProgramUpdateWithNestedWhereUniqueInput>
  /** Upsert single Program document */
  upsert?: InputMaybe<ProgramUpsertWithNestedWhereUniqueInput>
}

export type ProgramUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProgramUpdateInput
  /** Unique document search */
  where: ProgramWhereUniqueInput
}

export type ProgramUpsertInput = {
  /** Create document if it didn't exist */
  create: ProgramCreateInput
  /** Update document if it exists */
  update: ProgramUpdateInput
}

export type ProgramUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProgramUpsertInput
  /** Unique document search */
  where: ProgramWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type ProgramWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type ProgramWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProgramWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProgramWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProgramWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<ProgramWhereStageInput>
  documentInStages_none?: InputMaybe<ProgramWhereStageInput>
  documentInStages_some?: InputMaybe<ProgramWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  workouts_every?: InputMaybe<WorkoutWhereInput>
  workouts_none?: InputMaybe<WorkoutWhereInput>
  workouts_some?: InputMaybe<WorkoutWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProgramWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProgramWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProgramWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProgramWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProgramWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Program record uniquely */
export type ProgramWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  __typename?: 'Query'
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>
  /** Retrieve a single exercise */
  exercise?: Maybe<Exercise>
  /** Retrieve document version */
  exerciseVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple exercises */
  exercises: Array<Exercise>
  /** Retrieve multiple exercises using the Relay connection interface */
  exercisesConnection: ExerciseConnection
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve a single program */
  program?: Maybe<Program>
  /** Retrieve document version */
  programVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple programs */
  programs: Array<Program>
  /** Retrieve multiple programs using the Relay connection interface */
  programsConnection: ProgramConnection
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection
  /** Retrieve a single step */
  step?: Maybe<Step>
  /** Retrieve document version */
  stepVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple steps */
  steps: Array<Step>
  /** Retrieve multiple steps using the Relay connection interface */
  stepsConnection: StepConnection
  /** Retrieve a single user */
  user?: Maybe<User>
  /** Retrieve multiple users */
  users: Array<User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection
  /** Retrieve a single workout */
  workout?: Maybe<Workout>
  /** Retrieve document version */
  workoutVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple workouts */
  workouts: Array<Workout>
  /** Retrieve multiple workouts using the Relay connection interface */
  workoutsConnection: WorkoutConnection
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>
  where: Array<EntityWhereInput>
}

export type QueryExerciseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ExerciseWhereUniqueInput
}

export type QueryExerciseVersionArgs = {
  where: VersionWhereInput
}

export type QueryExercisesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ExerciseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ExerciseWhereInput>
}

export type QueryExercisesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ExerciseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ExerciseWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars['ID']['input']
  locales?: Array<Locale>
  stage?: Stage
}

export type QueryProgramArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ProgramWhereUniqueInput
}

export type QueryProgramVersionArgs = {
  where: VersionWhereInput
}

export type QueryProgramsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ProgramOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ProgramWhereInput>
}

export type QueryProgramsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ProgramOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ProgramWhereInput>
}

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryStepArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: StepWhereUniqueInput
}

export type QueryStepVersionArgs = {
  where: VersionWhereInput
}

export type QueryStepsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<StepOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<StepWhereInput>
}

export type QueryStepsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<StepOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<StepWhereInput>
}

export type QueryUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryWorkoutArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: WorkoutWhereUniqueInput
}

export type QueryWorkoutVersionArgs = {
  where: VersionWhereInput
}

export type QueryWorkoutsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<WorkoutOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<WorkoutWhereInput>
}

export type QueryWorkoutsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<WorkoutOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<WorkoutWhereInput>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  a: Scalars['RGBATransparency']['output']
  b: Scalars['RGBAHue']['output']
  g: Scalars['RGBAHue']['output']
  r: Scalars['RGBAHue']['output']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input']
  b: Scalars['RGBAHue']['input']
  g: Scalars['RGBAHue']['input']
  r: Scalars['RGBAHue']['input']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns HTMl representation */
  html: Scalars['String']['output']
  /** Returns Markdown representation */
  markdown: Scalars['String']['output']
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output']
}

/** Scheduled Operation system model */
export type ScheduledOperation = Entity &
  Node & {
    __typename?: 'ScheduledOperation'
    affectedDocuments: Array<ScheduledOperationAffectedDocument>
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Operation description */
    description?: Maybe<Scalars['String']['output']>
    /** Get the document in other stages */
    documentInStages: Array<ScheduledOperation>
    /** Operation error message */
    errorMessage?: Maybe<Scalars['String']['output']>
    /** The unique identifier */
    id: Scalars['ID']['output']
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    /** Raw operation payload including all details, this field is subject to change */
    rawPayload: Scalars['Json']['output']
    /** The release this operation is scheduled for */
    release?: Maybe<ScheduledRelease>
    /** System stage field */
    stage: Stage
    /** operation Status */
    status: ScheduledOperationStatus
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
  }

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument = Asset | Exercise | Program | Step | Workout

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Scheduled Release system model */
export type ScheduledRelease = Entity &
  Node & {
    __typename?: 'ScheduledRelease'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Release description */
    description?: Maybe<Scalars['String']['output']>
    /** Get the document in other stages */
    documentInStages: Array<ScheduledRelease>
    /** Release error message */
    errorMessage?: Maybe<Scalars['String']['output']>
    /** The unique identifier */
    id: Scalars['ID']['output']
    /** Whether scheduled release should be run */
    isActive: Scalars['Boolean']['output']
    /** Whether scheduled release is implicit */
    isImplicit: Scalars['Boolean']['output']
    /** Operations to run with this release */
    operations: Array<ScheduledOperation>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    /** Release date and time */
    releaseAt?: Maybe<Scalars['DateTime']['output']>
    /** System stage field */
    stage: Stage
    /** Release Status */
    status: ScheduledReleaseStatus
    /** Release Title */
    title?: Maybe<Scalars['String']['output']>
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
  }

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>
}

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
}

export type Step = Entity &
  Node & {
    __typename?: 'Step'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Get the document in other stages */
    documentInStages: Array<Step>
    /** List of Step versions */
    history: Array<Version>
    /** The unique identifier */
    id: Scalars['ID']['output']
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    scheduledIn: Array<ScheduledOperation>
    /** System stage field */
    stage: Stage
    title?: Maybe<Scalars['String']['output']>
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
  }

export type StepCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type StepDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type StepHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type StepPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type StepScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type StepUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type StepConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: StepWhereUniqueInput
}

/** A connection to a list of items. */
export type StepConnection = {
  __typename?: 'StepConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<StepEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type StepCreateInput = {
  clx06qjw90jfe07w5es455q2c?: InputMaybe<ExerciseCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type StepCreateManyInlineInput = {
  /** Connect multiple existing Step documents */
  connect?: InputMaybe<Array<StepWhereUniqueInput>>
  /** Create and connect multiple existing Step documents */
  create?: InputMaybe<Array<StepCreateInput>>
}

export type StepCreateOneInlineInput = {
  /** Connect one existing Step document */
  connect?: InputMaybe<StepWhereUniqueInput>
  /** Create and connect one Step document */
  create?: InputMaybe<StepCreateInput>
}

/** An edge in a connection. */
export type StepEdge = {
  __typename?: 'StepEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Step
}

/** Identifies documents */
export type StepManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StepWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StepWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StepWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<StepWhereStageInput>
  documentInStages_none?: InputMaybe<StepWhereStageInput>
  documentInStages_some?: InputMaybe<StepWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum StepOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type StepUpdateInput = {
  clx06qjw90jfe07w5es455q2c?: InputMaybe<ExerciseUpdateManyInlineInput>
  title?: InputMaybe<Scalars['String']['input']>
}

export type StepUpdateManyInlineInput = {
  /** Connect multiple existing Step documents */
  connect?: InputMaybe<Array<StepConnectInput>>
  /** Create and connect multiple Step documents */
  create?: InputMaybe<Array<StepCreateInput>>
  /** Delete multiple Step documents */
  delete?: InputMaybe<Array<StepWhereUniqueInput>>
  /** Disconnect multiple Step documents */
  disconnect?: InputMaybe<Array<StepWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Step documents */
  set?: InputMaybe<Array<StepWhereUniqueInput>>
  /** Update multiple Step documents */
  update?: InputMaybe<Array<StepUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Step documents */
  upsert?: InputMaybe<Array<StepUpsertWithNestedWhereUniqueInput>>
}

export type StepUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>
}

export type StepUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StepUpdateManyInput
  /** Document search */
  where: StepWhereInput
}

export type StepUpdateOneInlineInput = {
  /** Connect existing Step document */
  connect?: InputMaybe<StepWhereUniqueInput>
  /** Create and connect one Step document */
  create?: InputMaybe<StepCreateInput>
  /** Delete currently connected Step document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Step document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Step document */
  update?: InputMaybe<StepUpdateWithNestedWhereUniqueInput>
  /** Upsert single Step document */
  upsert?: InputMaybe<StepUpsertWithNestedWhereUniqueInput>
}

export type StepUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StepUpdateInput
  /** Unique document search */
  where: StepWhereUniqueInput
}

export type StepUpsertInput = {
  /** Create document if it didn't exist */
  create: StepCreateInput
  /** Update document if it exists */
  update: StepUpdateInput
}

export type StepUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StepUpsertInput
  /** Unique document search */
  where: StepWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type StepWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type StepWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StepWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StepWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StepWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<StepWhereStageInput>
  documentInStages_none?: InputMaybe<StepWhereStageInput>
  documentInStages_some?: InputMaybe<StepWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type StepWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StepWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StepWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StepWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<StepWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Step record uniquely */
export type StepWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION',
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** User system model */
export type User = Entity &
  Node & {
    __typename?: 'User'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** Get the document in other stages */
    documentInStages: Array<User>
    /** The unique identifier */
    id: Scalars['ID']['output']
    /** Flag to determine if user is active or not */
    isActive: Scalars['Boolean']['output']
    /** User Kind. Can be either MEMBER, PAT or PUBLIC */
    kind: UserKind
    /** The username */
    name: Scalars['String']['output']
    /** Profile Picture url */
    picture?: Maybe<Scalars['String']['output']>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** System stage field */
    stage: Stage
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
  }

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: User
}

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Version = {
  __typename?: 'Version'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  revision: Scalars['Int']['output']
  stage: Stage
}

export type VersionWhereInput = {
  id: Scalars['ID']['input']
  revision: Scalars['Int']['input']
  stage: Stage
}

export type Workout = Entity &
  Node & {
    __typename?: 'Workout'
    bodyPart?: Maybe<Scalars['String']['output']>
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    description?: Maybe<Scalars['String']['output']>
    /** Get the document in other stages */
    documentInStages: Array<Workout>
    exercises: Array<Exercise>
    /** List of Workout versions */
    history: Array<Version>
    /** The unique identifier */
    id: Scalars['ID']['output']
    image?: Maybe<Asset>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    scheduledIn: Array<ScheduledOperation>
    /** System stage field */
    stage: Stage
    title?: Maybe<Scalars['String']['output']>
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
  }

export type WorkoutCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type WorkoutDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type WorkoutExercisesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ExerciseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ExerciseWhereInput>
}

export type WorkoutHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type WorkoutImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
  where?: InputMaybe<AssetSingleRelationWhereInput>
}

export type WorkoutPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type WorkoutScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type WorkoutUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type WorkoutConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: WorkoutWhereUniqueInput
}

/** A connection to a list of items. */
export type WorkoutConnection = {
  __typename?: 'WorkoutConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<WorkoutEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type WorkoutCreateInput = {
  bodyPart?: InputMaybe<Scalars['String']['input']>
  clx06sca80iog07vzc9hi8ta1?: InputMaybe<ProgramCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  exercises?: InputMaybe<ExerciseCreateManyInlineInput>
  image?: InputMaybe<AssetCreateOneInlineInput>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type WorkoutCreateManyInlineInput = {
  /** Connect multiple existing Workout documents */
  connect?: InputMaybe<Array<WorkoutWhereUniqueInput>>
  /** Create and connect multiple existing Workout documents */
  create?: InputMaybe<Array<WorkoutCreateInput>>
}

export type WorkoutCreateOneInlineInput = {
  /** Connect one existing Workout document */
  connect?: InputMaybe<WorkoutWhereUniqueInput>
  /** Create and connect one Workout document */
  create?: InputMaybe<WorkoutCreateInput>
}

/** An edge in a connection. */
export type WorkoutEdge = {
  __typename?: 'WorkoutEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Workout
}

/** Identifies documents */
export type WorkoutManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WorkoutWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WorkoutWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WorkoutWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  bodyPart?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  bodyPart_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  bodyPart_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  bodyPart_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  bodyPart_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  bodyPart_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  bodyPart_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  bodyPart_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  bodyPart_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  bodyPart_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<WorkoutWhereStageInput>
  documentInStages_none?: InputMaybe<WorkoutWhereStageInput>
  documentInStages_some?: InputMaybe<WorkoutWhereStageInput>
  exercises_every?: InputMaybe<ExerciseWhereInput>
  exercises_none?: InputMaybe<ExerciseWhereInput>
  exercises_some?: InputMaybe<ExerciseWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum WorkoutOrderByInput {
  BodyPartAsc = 'bodyPart_ASC',
  BodyPartDesc = 'bodyPart_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type WorkoutUpdateInput = {
  bodyPart?: InputMaybe<Scalars['String']['input']>
  clx06sca80iog07vzc9hi8ta1?: InputMaybe<ProgramUpdateManyInlineInput>
  description?: InputMaybe<Scalars['String']['input']>
  exercises?: InputMaybe<ExerciseUpdateManyInlineInput>
  image?: InputMaybe<AssetUpdateOneInlineInput>
  title?: InputMaybe<Scalars['String']['input']>
}

export type WorkoutUpdateManyInlineInput = {
  /** Connect multiple existing Workout documents */
  connect?: InputMaybe<Array<WorkoutConnectInput>>
  /** Create and connect multiple Workout documents */
  create?: InputMaybe<Array<WorkoutCreateInput>>
  /** Delete multiple Workout documents */
  delete?: InputMaybe<Array<WorkoutWhereUniqueInput>>
  /** Disconnect multiple Workout documents */
  disconnect?: InputMaybe<Array<WorkoutWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Workout documents */
  set?: InputMaybe<Array<WorkoutWhereUniqueInput>>
  /** Update multiple Workout documents */
  update?: InputMaybe<Array<WorkoutUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Workout documents */
  upsert?: InputMaybe<Array<WorkoutUpsertWithNestedWhereUniqueInput>>
}

export type WorkoutUpdateManyInput = {
  bodyPart?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type WorkoutUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WorkoutUpdateManyInput
  /** Document search */
  where: WorkoutWhereInput
}

export type WorkoutUpdateOneInlineInput = {
  /** Connect existing Workout document */
  connect?: InputMaybe<WorkoutWhereUniqueInput>
  /** Create and connect one Workout document */
  create?: InputMaybe<WorkoutCreateInput>
  /** Delete currently connected Workout document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Workout document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Workout document */
  update?: InputMaybe<WorkoutUpdateWithNestedWhereUniqueInput>
  /** Upsert single Workout document */
  upsert?: InputMaybe<WorkoutUpsertWithNestedWhereUniqueInput>
}

export type WorkoutUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WorkoutUpdateInput
  /** Unique document search */
  where: WorkoutWhereUniqueInput
}

export type WorkoutUpsertInput = {
  /** Create document if it didn't exist */
  create: WorkoutCreateInput
  /** Update document if it exists */
  update: WorkoutUpdateInput
}

export type WorkoutUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WorkoutUpsertInput
  /** Unique document search */
  where: WorkoutWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type WorkoutWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type WorkoutWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WorkoutWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WorkoutWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WorkoutWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  bodyPart?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  bodyPart_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  bodyPart_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  bodyPart_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  bodyPart_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  bodyPart_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  bodyPart_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  bodyPart_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  bodyPart_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  bodyPart_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<WorkoutWhereStageInput>
  documentInStages_none?: InputMaybe<WorkoutWhereStageInput>
  documentInStages_some?: InputMaybe<WorkoutWhereStageInput>
  exercises_every?: InputMaybe<ExerciseWhereInput>
  exercises_none?: InputMaybe<ExerciseWhereInput>
  exercises_some?: InputMaybe<ExerciseWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type WorkoutWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WorkoutWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WorkoutWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WorkoutWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<WorkoutWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Workout record uniquely */
export type WorkoutWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some',
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual',
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert',
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one',
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization',
}

export type GetExerciseQueryVariables = Exact<{
  exerciseId: Scalars['ID']['input']
}>

export type GetExerciseQuery = {
  __typename?: 'Query'
  exercises: Array<{
    __typename?: 'Exercise'
    id: string
    title?: string | null
    description?: string | null
    repetitions?: number | null
    duration?: number | null
    videoUrl?: string | null
    image?: { __typename?: 'Asset'; fileName: string; url: string } | null
    steps: Array<{ __typename?: 'Step'; id: string; title?: string | null }>
  }>
}

export type GetProgramQueryVariables = Exact<{
  programId: Scalars['ID']['input']
}>

export type GetProgramQuery = {
  __typename?: 'Query'
  program?: {
    __typename?: 'Program'
    id: string
    title?: string | null
    description?: string | null
    image?: { __typename?: 'Asset'; fileName: string; url: string } | null
    workouts: Array<{
      __typename?: 'Workout'
      id: string
      title?: string | null
      description?: string | null
      bodyPart?: string | null
      image?: { __typename?: 'Asset'; fileName: string; url: string } | null
      exercises: Array<{
        __typename?: 'Exercise'
        id: string
        title?: string | null
        description?: string | null
        duration?: number | null
        repetitions?: number | null
        videoUrl?: string | null
        steps: Array<{ __typename?: 'Step'; id: string; title?: string | null }>
        image?: { __typename?: 'Asset'; fileName: string; url: string } | null
      }>
    }>
  } | null
}

export type GetProgramsQueryVariables = Exact<{ [key: string]: never }>

export type GetProgramsQuery = {
  __typename?: 'Query'
  programs: Array<{
    __typename?: 'Program'
    id: string
    title?: string | null
    description?: string | null
    image?: { __typename?: 'Asset'; fileName: string; url: string } | null
    workouts: Array<{
      __typename?: 'Workout'
      id: string
      title?: string | null
      description?: string | null
      bodyPart?: string | null
      image?: { __typename?: 'Asset'; fileName: string; url: string } | null
      exercises: Array<{
        __typename?: 'Exercise'
        id: string
        title?: string | null
        description?: string | null
        duration?: number | null
        repetitions?: number | null
        videoUrl?: string | null
        steps: Array<{ __typename?: 'Step'; id: string; title?: string | null }>
        image?: { __typename?: 'Asset'; fileName: string; url: string } | null
      }>
    }>
  }>
}

export type GetWorkoutQueryVariables = Exact<{
  workoutId: Scalars['ID']['input']
}>

export type GetWorkoutQuery = {
  __typename?: 'Query'
  workout?: {
    __typename?: 'Workout'
    id: string
    title?: string | null
    description?: string | null
    bodyPart?: string | null
    image?: { __typename?: 'Asset'; fileName: string; url: string } | null
    exercises: Array<{
      __typename?: 'Exercise'
      id: string
      title?: string | null
      description?: string | null
      duration?: number | null
      repetitions?: number | null
      videoUrl?: string | null
      steps: Array<{ __typename?: 'Step'; id: string; title?: string | null }>
      image?: { __typename?: 'Asset'; fileName: string; url: string } | null
    }>
  } | null
}

export type GetWorkoutsQueryVariables = Exact<{ [key: string]: never }>

export type GetWorkoutsQuery = {
  __typename?: 'Query'
  workouts: Array<{
    __typename?: 'Workout'
    id: string
    title?: string | null
    description?: string | null
    bodyPart?: string | null
    image?: { __typename?: 'Asset'; fileName: string; url: string } | null
    exercises: Array<{
      __typename?: 'Exercise'
      id: string
      title?: string | null
      description?: string | null
      duration?: number | null
      repetitions?: number | null
      videoUrl?: string | null
      steps: Array<{ __typename?: 'Step'; id: string; title?: string | null }>
      image?: { __typename?: 'Asset'; fileName: string; url: string } | null
    }>
  }>
}

export const GetExerciseDocument = gql`
  query getExercise($exerciseId: ID!) {
    exercises(where: { id: $exerciseId }) {
      id
      title
      description
      repetitions
      duration
      image {
        fileName
        url
      }
      videoUrl
      steps {
        id
        title
      }
    }
  }
`
export const GetProgramDocument = gql`
  query getProgram($programId: ID!) {
    program(where: { id: $programId }) {
      id
      title
      description
      image {
        fileName
        url
      }
      workouts {
        id
        title
        description
        bodyPart
        image {
          fileName
          url
        }
        exercises {
          id
          title
          description
          duration
          repetitions
          steps {
            id
            title
          }
          image {
            fileName
            url
          }
          videoUrl
        }
      }
    }
  }
`
export const GetProgramsDocument = gql`
  query getPrograms {
    programs {
      id
      title
      description
      image {
        fileName
        url
      }
      workouts {
        id
        title
        description
        bodyPart
        image {
          fileName
          url
        }
        exercises {
          id
          title
          description
          duration
          repetitions
          steps {
            id
            title
          }
          image {
            fileName
            url
          }
          videoUrl
        }
      }
    }
  }
`
export const GetWorkoutDocument = gql`
  query getWorkout($workoutId: ID!) {
    workout(where: { id: $workoutId }) {
      id
      title
      description
      bodyPart
      image {
        fileName
        url
      }
      exercises {
        id
        title
        description
        duration
        repetitions
        steps {
          id
          title
        }
        image {
          fileName
          url
        }
        videoUrl
      }
    }
  }
`
export const GetWorkoutsDocument = gql`
  query getWorkouts {
    workouts {
      id
      title
      description
      bodyPart
      image {
        fileName
        url
      }
      exercises {
        id
        title
        description
        duration
        repetitions
        steps {
          id
          title
        }
        image {
          fileName
          url
        }
        videoUrl
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action()
const GetExerciseDocumentString = print(GetExerciseDocument)
const GetProgramDocumentString = print(GetProgramDocument)
const GetProgramsDocumentString = print(GetProgramsDocument)
const GetWorkoutDocumentString = print(GetWorkoutDocument)
const GetWorkoutsDocumentString = print(GetWorkoutsDocument)
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getExercise(
      variables: GetExerciseQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<{ data: GetExerciseQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetExerciseQuery>(GetExerciseDocumentString, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'getExercise',
        'query',
        variables
      )
    },
    getProgram(
      variables: GetProgramQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<{ data: GetProgramQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetProgramQuery>(GetProgramDocumentString, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'getProgram',
        'query',
        variables
      )
    },
    getPrograms(
      variables?: GetProgramsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<{ data: GetProgramsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetProgramsQuery>(GetProgramsDocumentString, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'getPrograms',
        'query',
        variables
      )
    },
    getWorkout(
      variables: GetWorkoutQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<{ data: GetWorkoutQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetWorkoutQuery>(GetWorkoutDocumentString, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'getWorkout',
        'query',
        variables
      )
    },
    getWorkouts(
      variables?: GetWorkoutsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<{ data: GetWorkoutsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetWorkoutsQuery>(GetWorkoutsDocumentString, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'getWorkouts',
        'query',
        variables
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
