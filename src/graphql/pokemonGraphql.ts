import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Represents a Pokémon's attack types */
export type Attack = {
  __typename?: 'Attack';
  /** The damage of this Pokémon attack */
  damage?: Maybe<Scalars['Int']['output']>;
  /** The name of this Pokémon attack */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of this Pokémon attack */
  type?: Maybe<Scalars['String']['output']>;
};

/** Represents a Pokémon */
export type Pokemon = {
  __typename?: 'Pokemon';
  /** The attacks of this Pokémon */
  attacks?: Maybe<PokemonAttack>;
  /** The classification of this Pokémon */
  classification?: Maybe<Scalars['String']['output']>;
  /** The evolution requirements of this Pokémon */
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  /** The evolutions of this Pokémon */
  evolutions?: Maybe<Array<Maybe<Pokemon>>>;
  fleeRate?: Maybe<Scalars['Float']['output']>;
  /** The minimum and maximum weight of this Pokémon */
  height?: Maybe<PokemonDimension>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** The maximum CP of this Pokémon */
  maxCP?: Maybe<Scalars['Int']['output']>;
  /** The maximum HP of this Pokémon */
  maxHP?: Maybe<Scalars['Int']['output']>;
  /** The name of this Pokémon */
  name?: Maybe<Scalars['String']['output']>;
  /** The identifier of this Pokémon */
  number?: Maybe<Scalars['String']['output']>;
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type(s) of this Pokémon */
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The minimum and maximum weight of this Pokémon */
  weight?: Maybe<PokemonDimension>;
};

/** Represents a Pokémon's attack types */
export type PokemonAttack = {
  __typename?: 'PokemonAttack';
  /** The fast attacks of this Pokémon */
  fast?: Maybe<Array<Maybe<Attack>>>;
  /** The special attacks of this Pokémon */
  special?: Maybe<Array<Maybe<Attack>>>;
};

/** Represents a Pokémon's dimensions */
export type PokemonDimension = {
  __typename?: 'PokemonDimension';
  /** The maximum value of this dimension */
  maximum?: Maybe<Scalars['String']['output']>;
  /** The minimum value of this dimension */
  minimum?: Maybe<Scalars['String']['output']>;
};

/** Represents a Pokémon's requirement to evolve */
export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement';
  /** The amount of candy to evolve */
  amount?: Maybe<Scalars['Int']['output']>;
  /** The name of the candy to evolve */
  name?: Maybe<Scalars['String']['output']>;
};

/** Query any Pokémon by number or name */
export type Query = {
  __typename?: 'Query';
  pokemon?: Maybe<Pokemon>;
  pokemons?: Maybe<Array<Maybe<Pokemon>>>;
  query?: Maybe<Query>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonsArgs = {
  first: Scalars['Int']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Attack: ResolverTypeWrapper<Attack>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Pokemon: ResolverTypeWrapper<Pokemon>;
  PokemonAttack: ResolverTypeWrapper<PokemonAttack>;
  PokemonDimension: ResolverTypeWrapper<PokemonDimension>;
  PokemonEvolutionRequirement: ResolverTypeWrapper<PokemonEvolutionRequirement>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Attack: Attack;
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Pokemon: Pokemon;
  PokemonAttack: PokemonAttack;
  PokemonDimension: PokemonDimension;
  PokemonEvolutionRequirement: PokemonEvolutionRequirement;
  Query: {};
  String: Scalars['String']['output'];
};

export type AttackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attack'] = ResolversParentTypes['Attack']> = {
  damage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = {
  attacks?: Resolver<Maybe<ResolversTypes['PokemonAttack']>, ParentType, ContextType>;
  classification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evolutionRequirements?: Resolver<Maybe<ResolversTypes['PokemonEvolutionRequirement']>, ParentType, ContextType>;
  evolutions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pokemon']>>>, ParentType, ContextType>;
  fleeRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['PokemonDimension']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxCP?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxHP?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resistant?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  types?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  weaknesses?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['PokemonDimension']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonAttackResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonAttack'] = ResolversParentTypes['PokemonAttack']> = {
  fast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attack']>>>, ParentType, ContextType>;
  special?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attack']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonDimensionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonDimension'] = ResolversParentTypes['PokemonDimension']> = {
  maximum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minimum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonEvolutionRequirementResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonEvolutionRequirement'] = ResolversParentTypes['PokemonEvolutionRequirement']> = {
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  pokemon?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, Partial<QueryPokemonArgs>>;
  pokemons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pokemon']>>>, ParentType, ContextType, RequireFields<QueryPokemonsArgs, 'first'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Attack?: AttackResolvers<ContextType>;
  Pokemon?: PokemonResolvers<ContextType>;
  PokemonAttack?: PokemonAttackResolvers<ContextType>;
  PokemonDimension?: PokemonDimensionResolvers<ContextType>;
  PokemonEvolutionRequirement?: PokemonEvolutionRequirementResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


export type GetPokemonQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPokemonQuery = { __typename?: 'Query', pokemon?: { __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, classification?: string | null, types?: Array<string | null> | null, resistant?: Array<string | null> | null, weaknesses?: Array<string | null> | null, fleeRate?: number | null, maxCP?: number | null, maxHP?: number | null, image?: string | null, weight?: { __typename?: 'PokemonDimension', minimum?: string | null, maximum?: string | null } | null, height?: { __typename?: 'PokemonDimension', minimum?: string | null, maximum?: string | null } | null, attacks?: { __typename?: 'PokemonAttack', fast?: Array<{ __typename?: 'Attack', name?: string | null, type?: string | null, damage?: number | null } | null> | null, special?: Array<{ __typename?: 'Attack', name?: string | null, type?: string | null, damage?: number | null } | null> | null } | null, evolutions?: Array<{ __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, classification?: string | null, types?: Array<string | null> | null, resistant?: Array<string | null> | null, weaknesses?: Array<string | null> | null, fleeRate?: number | null, maxCP?: number | null, maxHP?: number | null, image?: string | null } | null> | null } | null };

export type GetPokemonsQueryVariables = Exact<{
  first: Scalars['Int']['input'];
}>;


export type GetPokemonsQuery = { __typename?: 'Query', pokemons?: Array<{ __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, classification?: string | null, types?: Array<string | null> | null, resistant?: Array<string | null> | null, weaknesses?: Array<string | null> | null, fleeRate?: number | null, maxCP?: number | null, maxHP?: number | null, image?: string | null, weight?: { __typename?: 'PokemonDimension', minimum?: string | null, maximum?: string | null } | null, height?: { __typename?: 'PokemonDimension', minimum?: string | null, maximum?: string | null } | null } | null> | null };


export const GetPokemonDocument = gql`
    query GetPokemon($name: String) {
  pokemon(name: $name) {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
}
    `;

/**
 * __useGetPokemonQuery__
 *
 * To run a query within a React component, call `useGetPokemonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetPokemonQuery(baseOptions?: Apollo.QueryHookOptions<GetPokemonQuery, GetPokemonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPokemonQuery, GetPokemonQueryVariables>(GetPokemonDocument, options);
      }
export function useGetPokemonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonQuery, GetPokemonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPokemonQuery, GetPokemonQueryVariables>(GetPokemonDocument, options);
        }
export type GetPokemonQueryHookResult = ReturnType<typeof useGetPokemonQuery>;
export type GetPokemonLazyQueryHookResult = ReturnType<typeof useGetPokemonLazyQuery>;
export type GetPokemonQueryResult = Apollo.QueryResult<GetPokemonQuery, GetPokemonQueryVariables>;
export const GetPokemonsDocument = gql`
    query GetPokemons($first: Int!) {
  pokemons(first: $first) {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
}
    `;

/**
 * __useGetPokemonsQuery__
 *
 * To run a query within a React component, call `useGetPokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonsQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetPokemonsQuery(baseOptions: Apollo.QueryHookOptions<GetPokemonsQuery, GetPokemonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPokemonsQuery, GetPokemonsQueryVariables>(GetPokemonsDocument, options);
      }
export function useGetPokemonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonsQuery, GetPokemonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPokemonsQuery, GetPokemonsQueryVariables>(GetPokemonsDocument, options);
        }
export type GetPokemonsQueryHookResult = ReturnType<typeof useGetPokemonsQuery>;
export type GetPokemonsLazyQueryHookResult = ReturnType<typeof useGetPokemonsLazyQuery>;
export type GetPokemonsQueryResult = Apollo.QueryResult<GetPokemonsQuery, GetPokemonsQueryVariables>;