import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector( // реселектор позволяет момоизировать значение из стейта
    getCounter,
    (counter: CounterSchema) => counter.value,
);
