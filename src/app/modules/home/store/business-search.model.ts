import { ID } from '@datorama/akita';
import { IndustryTypeEnum } from '@data/schema/industry-type.enum';

export interface BusinessSearchModel {
  id: ID,
  businessName: string,
  postcode: string,
  industry: IndustryTypeEnum
}