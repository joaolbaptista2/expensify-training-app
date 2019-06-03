import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should set TextFilter with a specific input', () => {
    const inputFilter = 'rent';

    const action = setTextFilter(inputFilter);

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: inputFilter
    });
});

test('should set TextFilter with a default value empty', () => {

    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should set sort by date filter', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should set sort by amount filter', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should set start date', () => {
    const startDate = moment(0);
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: startDate
    });
});

test('should set end date', () => {
    const endDate = moment(0).add(1, 'day');
    const action = setEndDate(endDate);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: endDate
    });
});