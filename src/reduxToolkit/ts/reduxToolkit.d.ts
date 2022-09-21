import '@reduxjs/toolkit/dist/query/core/buildInitiate';

declare module '@reduxjs/toolkit/dist/query/core/buildInitiate' {
  export interface StartMutationActionCreatorOptions {
    /**
     * If this mutation should be tracked in the store.
     * If you just want to manually trigger this mutation using `dispatch` and don't care about the
     * result, state & potential errors being held in store, you can set this to false.
     * (defaults to `true`)
     */
    track?: boolean;
    fixedCacheKey?: string;
  }
}
