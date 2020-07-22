import { IndustryTypeEnum } from '@data/schema/industry-type.enum';

export interface Search {
  businessName: string;
  businessPostcode: string;
  businessIndustry: IndustryTypeEnum;
}