import location from 'countrycitystatejson';

const getCountries = () => (
  location.getCountries().map(country => ({ name: country.name, shortName: country.shortName }))
    .filter(({ name }) => name !== ('United States' || 'Canada'))
);


export default {
  getCountries,
  getStates: location.getStatesByShort,
}
