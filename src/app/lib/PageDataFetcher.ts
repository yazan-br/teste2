/**
 * PageDataFetcher Class
 *
 * This module defines a class `PageDataFetcher` that provides data retrieval based on a given URL slug.
 * It helps dynamically fetch content for specific pages, supporting multiple routes and providing a default
 * data response if the requested slug does not match any known pages.
 *
 * ### Slug-to-Data Mapping
 * The `PageDataFetcher` maintains a mapping between route slugs and their corresponding data objects.
 * These mappings allow the application to return specific data for different roles and page types:
 * - **substitute-teacher**: Provides data for the Substitute Teacher page.
 * - **para-professional**: Provides data for the Para-Professional page.
 * - **child-nutrition**: Provides data for the Child Nutrition page.
 * - **substitute-custodian**: Provides data for the Substitute Custodian page.
 *
 * If an unknown slug is requested, a default data object (currently `substituteTeacher`) is returned.
 *
 * ### Usage Example
 * The `getDataForSlug` method allows easy data retrieval:
 * ```typescript
 * const fetcher = new PageDataFetcher();
 * const data = fetcher.getDataForSlug('substitute-teacher');
 * // Returns the `substituteTeacher` data.
 * ```
 *
 * ### Type Safety
 * The class uses a `PageData` type that represents the structure of the page data, derived from the 
 * shape of the `substituteTeacher` data, ensuring type consistency across the different data objects.
 *
 * ### Example Routes
 * Routes expected to use this data-fetching approach include:
 * - `/substitute-teacher`
 * - `/para-professional`
 * - `/child-nutrition`
 * - `/substitute-custodian`
 *
 * ### API
 * - **getDataForSlug(slug: string): PageData**: Retrieves the data object based on the slug provided. 
 *   If the slug is not recognized, it returns the default page data.
 */

import {
    substituteTeacher,
    paraProfessional,
    childNutrition,
    substituteCustodian
  } from '@/app/mocks/data';
  
  // Type to represent the data structure
  type PageData = typeof substituteTeacher;
  
  export class PageDataFetcher {
    private slugToDataMap: Record<string, PageData>;
    private defaultData: PageData;
    constructor() {
      this.slugToDataMap = {
        'substitute-teacher': substituteTeacher,
        'para-professional': paraProfessional,
        'child-nutrition': childNutrition,
        'substitute-custodian': substituteCustodian,
      };
      this.defaultData = substituteTeacher; 
    }
  
    public getDataForSlug(slug: string): PageData {
      return this.slugToDataMap[slug] || this.defaultData;
    }
  }