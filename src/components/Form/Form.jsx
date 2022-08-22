import { useForm, Controller } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { searchCity } from 'redux/apiWeather';
import { BtnAdd, Input, SearchForm } from './Form.styled';

export const Form = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector(({ weather }) => weather);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: { location: '' } });

  const onSubmit = handleSubmit(data => {
    if (data.location) {
      const isMatches = cities.find(
        city => city.name.toLowerCase() === data.location.toLowerCase()
      );

      if (!isMatches) {
        dispatch(searchCity(data.location));
        reset();
      } else {
        toast.error('This city has already been shown');
      }
    }
  });
  return (
    <SearchForm onSubmit={onSubmit}>
      <Controller
        name="location"
        control={control}
        render={({ field }) => (
          <Input
            id="outlined-basic"
            variant="outlined"
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            {...field}
          />
        )}
      />
      <div>
        {errors?.location && <p>{errors?.location?.message || 'Error!'}</p>}
      </div>
      <BtnAdd variant="contained" type="submit" disabled={!isValid}>
        ADD
      </BtnAdd>
    </SearchForm>
  );
};
