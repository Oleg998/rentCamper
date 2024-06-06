import { createSelector } from '@reduxjs/toolkit';
import {selectFilter} from '../filter/filter-selectors';

export const getAllCampers = store => store.campers.items;

export const selectFavorites = (state) => state.favorites;

export const selectFilterCampers = createSelector(
  [getAllCampers, selectFilter],
  (campers, filter) => {
  let result = filter.filterLocation
    ? campers.filter(camper =>
      camper.location.toLowerCase().includes(filter.filterLocation.toLowerCase())
      )
    : campers;

    if (filter.details.equipment.length > 0) {
      result = result.filter(camper => {
        const hasRequiredDetails = filter.details.equipment.every(detail => camper.details[detail] > 0);
        return hasRequiredDetails
      });
    }

    if (filter.details.transmission) {
      result = result.filter(camper => camper.transmission ==="automatic");
    }
   

  if (filter.details.type.length > 0) {
    result = result.filter(camper =>
      filter.details.type.includes(camper.form)
    );
  }

  return result;
  }
);
