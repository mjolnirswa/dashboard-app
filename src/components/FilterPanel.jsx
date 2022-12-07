import { useSelector, useDispatch } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { selectFilters } from 'store/filters/filter-selector';
import { removeFilter, cleanFilter } from 'store/filters/filter-actions';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  if(currentFilters.length === 0 ){
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(filter => (
            <Badge 
            key = {filter}
            variant="clearable"
            onClear={() => dispatch(removeFilter(filter))}>
              {filter}
            </Badge>
          ))}
        </Stack>

        <button 
        className='link'
        onClick={() => dispatch(cleanFilter)}
        >Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};