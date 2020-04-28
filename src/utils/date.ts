import format from 'date-fns/format';

const DDMMYYYformat = 'DD-MM-YYYY';

export const formatDateDDMMYYYY = (backendDate: string) => {
  const date = new Date(backendDate);
  return format(date, DDMMYYYformat);
};
