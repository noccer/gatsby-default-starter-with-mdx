import format from 'date-fns/format';

const DDMMYYYformat = 'dd-MM-yyyy';

export const formatDateDDMMYYYY = (backendDate: string) => {
  const date = new Date(backendDate);
  return format(date, DDMMYYYformat);
};
