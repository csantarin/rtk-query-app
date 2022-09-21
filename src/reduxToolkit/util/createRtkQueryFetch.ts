import { ThunkAction } from "@reduxjs/toolkit";
import { QueryDefinition } from "@reduxjs/toolkit/dist/query";
import { StartQueryActionCreatorOptions, QueryActionCreatorResult, MutationActionCreatorResult } from "@reduxjs/toolkit/dist/query/core/buildInitiate";
import { MutationDefinition, QueryArgFrom } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { AnyAction } from "redux";
import { dispatch } from "root/sm/store";

type StartMutationActionCreatorOptions = Parameters<StartMutationActionCreator<any>>[1];

type StartQueryActionCreator<D extends QueryDefinition<any, any, any, any, any>> = (arg: QueryArgFrom<D>, options?: StartQueryActionCreatorOptions) => ThunkAction<QueryActionCreatorResult<D>, any, any, AnyAction>;
type StartMutationActionCreator<D extends MutationDefinition<any, any, any, any>> = (arg: QueryArgFrom<D>, options?: any) => ThunkAction<MutationActionCreatorResult<D>, any, any, AnyAction>;

const createRtkQueryFetch = {
  query: <Definition extends QueryDefinition<any, any, any, any, any>>(actionCreator: StartQueryActionCreator<Definition>) => {
    const rtkQueryFetch = async (actionCreatorArgument: QueryArgFrom<Definition>, actionCreatorOptions?: StartQueryActionCreatorOptions) => {
      const result = await dispatch(actionCreator(actionCreatorArgument, actionCreatorOptions));

      if (result.isError) {
        throw result.error;
      }

      return result.data;
    };

    return rtkQueryFetch;
  },
  mutation: <Definition extends MutationDefinition<any, any, any, any, any>>(actionCreator: StartMutationActionCreator<Definition>) => {
    const rtkQueryFetch = async (actionCreatorArgument: QueryArgFrom<Definition>, actionCreatorOptions?: StartMutationActionCreatorOptions) => {
      const result = await dispatch(actionCreator(actionCreatorArgument, actionCreatorOptions));

      if ('error' in result) {
        throw result.error;
      }

      return result.data;
    };

    return rtkQueryFetch;
  },
};

// const createRtkQueryFetch = <Definition extends QueryDefinition<any, any, any, any, any> | MutationDefinition<any, any, any, any, any>>(
//   actionCreator:
//     Definition extends QueryDefinition<any, any, any, any, any> ? StartQueryActionCreator<Definition> :
//     Definition extends MutationDefinition<any, any, any, any, any> ? StartMutationActionCreator<Definition> :
//     unknown
// ) => {
//   const rtkQueryFetch = async (
//     actionCreatorArgument: QueryArgFrom<Definition>,
//     actionCreatorOptions?:
//       Definition extends QueryDefinition<any, any, any, any, any> ? StartMutationActionCreatorOptions :
//       Definition extends MutationDefinition<any, any, any, any, any> ? StartMutationActionCreatorOptions :
//       unknown,
//   ) => {
//     type RtkQueryThunkAction =
//       Definition extends QueryDefinition<any, any, any, any, any> ? ThunkAction<QueryActionCreatorResult<Definition>, any, any, AnyAction> :
//       Definition extends MutationDefinition<any, any, any, any, any> ? ThunkAction<MutationActionCreatorResult<Definition>, any, any, AnyAction> :
//       unknown;

//     const result = await dispatch(actionCreator(actionCreatorArgument, actionCreatorOptions) as RtkQueryThunkAction);

//     if (result.isError) {
//       throw result.error;
//     }

//     return result.data;
//   };

//   return rtkQueryFetch;
// };

export default createRtkQueryFetch;
