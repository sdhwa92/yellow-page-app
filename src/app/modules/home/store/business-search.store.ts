import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { BusinessSearchModel } from './business-search.model';

export interface BusinessSearchState extends EntityState<BusinessSearchModel> {}

export function createInitialState(): BusinessSearchModel {
  return {
    id: null,
    businessName: '',
    postcode: '',
    industry: null
  }
}

@StoreConfig({
  name: 'businessSearch',
  resettable: true
})
export class BusinessSearchStore extends EntityStore<BusinessSearchState, BusinessSearchModel> {
  constructor() {
    super(createInitialState());
  }
}